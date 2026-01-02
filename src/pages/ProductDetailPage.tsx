import { useParams, Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, MessageCircle, ZoomIn, X } from "lucide-react";
import { getProductByCode } from "@/data/products";
import { OtherProducts } from "@/components/ProductCard";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState, useRef } from "react";

const ProductDetailPage = () => {
  const { code } = useParams<{ code: string }>();
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  const [showOn, setShowOn] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 50, y: 50 });
  const imageRef = useRef<HTMLDivElement>(null);

  const product = getProductByCode(code || "");

  if (!product) {
    return (
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-3xl mb-4">{t.products.notFound}</h1>
          <Link to="/produk" className="text-primary hover:underline">
            {t.common.backToProducts}
          </Link>
        </div>
      </main>
    );
  }

  const whatsappMessage = encodeURIComponent(
    language === "id"
      ? `Halo, saya tertarik memesan produk ${product.name} - ${product.code} yang sedang saya lihat di website.`
      : `Hello, I'm interested in ordering the product ${product.name} - ${product.code} that I'm viewing on your website.`
  );
  const whatsappLink = `https://api.whatsapp.com/send/?phone=6289666150888&text=${whatsappMessage}`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;
    const rect = imageRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomPosition({ x, y });
  };

  const currentImage = showOn ? product.imageOn : product.imageOff;

  return (
    <main className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={18} />
            <span>{t.common.back}</span>
          </button>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Images - OFF/ON Comparison with Zoom */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div
              ref={imageRef}
              onClick={() => setIsZoomed(true)}
              onMouseMove={handleMouseMove}
              className={cn(
                "relative aspect-square rounded-lg overflow-hidden card-premium cursor-zoom-in group",
                showOn && "glow-border"
              )}
            >
              <img
                src={currentImage}
                alt={product.name}
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute top-4 right-4 px-3 py-1 bg-background/80 backdrop-blur rounded-full text-sm font-medium">
                {showOn ? t.hero.on : t.hero.off}
              </div>
              {/* Zoom indicator */}
              <div className="absolute bottom-4 right-4 p-2 bg-background/80 backdrop-blur rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn size={20} className="text-foreground" />
              </div>
            </div>

            {/* Toggle */}
            <div className="flex gap-4">
              <button
                onClick={() => setShowOn(false)}
                className={cn(
                  "flex-1 aspect-video rounded-lg overflow-hidden border-2 transition-colors relative",
                  !showOn ? "border-primary" : "border-transparent opacity-60"
                )}
              >
                <img
                  src={product.imageOff}
                  alt={t.hero.off}
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-2 left-2 text-xs bg-background/80 backdrop-blur px-2 py-0.5 rounded">
                  {t.hero.off}
                </span>
              </button>
              <button
                onClick={() => setShowOn(true)}
                className={cn(
                  "flex-1 aspect-video rounded-lg overflow-hidden border-2 transition-colors relative",
                  showOn ? "border-primary" : "border-transparent opacity-60"
                )}
              >
                <img
                  src={product.imageOn}
                  alt={t.hero.on}
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-2 left-2 text-xs bg-background/80 backdrop-blur px-2 py-0.5 rounded">
                  {t.hero.on}
                </span>
              </button>
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            <div>
              <p className="text-primary font-medium mb-2">{product.code}</p>
              <h1 className="font-display text-4xl md:text-5xl font-medium mb-4">
                {product.name}
              </h1>
              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Specs */}
            <div className="grid grid-cols-2 gap-4">
              <div className="card-premium p-4">
                <p className="text-xs text-muted-foreground mb-1">{t.common.size}</p>
                <p className="font-medium">{product.specifications.size}</p>
              </div>
              <div className="card-premium p-4">
                <p className="text-xs text-muted-foreground mb-1">{t.common.thickness}</p>
                <p className="font-medium">{product.specifications.thickness}</p>
              </div>
              <div className="card-premium p-4">
                <p className="text-xs text-muted-foreground mb-1">{t.common.weight}</p>
                <p className="font-medium">{product.specifications.weight}</p>
              </div>
              <div className="card-premium p-4">
                <p className="text-xs text-muted-foreground mb-1">{t.common.material}</p>
                <p className="font-medium">{product.material}</p>
              </div>
            </div>

            {/* Features */}
            <div>
              <p className="text-sm text-muted-foreground mb-3">{t.common.features}:</p>
              <div className="flex flex-wrap gap-2">
                {product.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1.5 bg-muted rounded-full text-sm"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle size={18} className="mr-2" />
                  {t.common.orderNow}
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/">{t.common.backToHome}</Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Other Products */}
        <OtherProducts currentProductId={product.id} />
      </div>

      {/* Zoom Modal */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setIsZoomed(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full max-h-[90vh] overflow-hidden rounded-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsZoomed(false)}
                className="absolute top-4 right-4 z-10 p-2 bg-background/80 backdrop-blur rounded-full hover:bg-background transition-colors"
              >
                <X size={24} />
              </button>
              <div
                className="w-full h-full overflow-auto cursor-move"
                style={{ maxHeight: "85vh" }}
              >
                <img
                  src={currentImage}
                  alt={product.name}
                  className="w-full h-auto min-w-[150%] object-contain"
                  style={{
                    transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
                  }}
                />
              </div>
              {/* Toggle in modal */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-background/80 backdrop-blur p-2 rounded-full">
                <button
                  onClick={() => setShowOn(false)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                    !showOn ? "bg-primary text-primary-foreground" : "text-foreground/60 hover:text-foreground"
                  )}
                >
                  {t.hero.off}
                </button>
                <button
                  onClick={() => setShowOn(true)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                    showOn ? "bg-primary text-primary-foreground" : "text-foreground/60 hover:text-foreground"
                  )}
                >
                  {t.hero.on}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default ProductDetailPage;
