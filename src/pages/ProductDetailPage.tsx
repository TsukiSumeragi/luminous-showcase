import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { getProductByCode, products } from "@/data/products";
import { OtherProducts } from "@/components/ProductCard";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";

const ProductDetailPage = () => {
  const { code } = useParams<{ code: string }>();
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [showOn, setShowOn] = useState(false);

  const product = getProductByCode(code || "");

  if (!product) {
    return (
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-3xl mb-4">Produk tidak ditemukan</h1>
          <Link to="/produk" className="text-primary hover:underline">
            Kembali ke Produk
          </Link>
        </div>
      </main>
    );
  }

  const whatsappMessage = encodeURIComponent(
    `Halo, saya tertarik memesan produk ${product.name} - ${product.code} yang sedang saya lihat di website.`
  );
  const whatsappLink = `https://api.whatsapp.com/send/?phone=6289666150888&text=${whatsappMessage}`;

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
            <span>Kembali</span>
          </button>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Images - OFF/ON Comparison */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div
              className={cn(
                "relative aspect-square rounded-lg overflow-hidden card-premium",
                showOn && "glow-border"
              )}
            >
              <img
                src={showOn ? product.imageOn : product.imageOff}
                alt={product.name}
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute top-4 right-4 px-3 py-1 bg-background/80 backdrop-blur rounded-full text-sm font-medium">
                {showOn ? "ON" : "OFF"}
              </div>
            </div>

            {/* Toggle */}
            <div className="flex gap-4">
              <button
                onClick={() => setShowOn(false)}
                className={cn(
                  "flex-1 aspect-video rounded-lg overflow-hidden border-2 transition-colors",
                  !showOn ? "border-primary" : "border-transparent opacity-60"
                )}
              >
                <img
                  src={product.imageOff}
                  alt="OFF"
                  className="w-full h-full object-cover"
                />
              </button>
              <button
                onClick={() => setShowOn(true)}
                className={cn(
                  "flex-1 aspect-video rounded-lg overflow-hidden border-2 transition-colors",
                  showOn ? "border-primary" : "border-transparent opacity-60"
                )}
              >
                <img
                  src={product.imageOn}
                  alt="ON"
                  className="w-full h-full object-cover"
                />
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
              <p className="text-sm text-muted-foreground mb-3">Fitur:</p>
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
    </main>
  );
};

export default ProductDetailPage;
