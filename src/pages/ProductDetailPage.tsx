import { useParams, Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, MessageCircle, ZoomIn, ZoomOut, X, RotateCcw, Lightbulb, LightbulbOff } from "lucide-react";
import { getProductByCode } from "@/data/products";
import { OtherProducts } from "@/components/ProductCard";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState, useRef, useCallback, useEffect } from "react";

const ProductDetailPage = () => {
  const { code } = useParams<{ code: string }>();
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  const [showOn, setShowOn] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const product = getProductByCode(code || "");

  // Reset zoom when modal closes
  useEffect(() => {
    if (!isZoomed) {
      setScale(1);
      setPosition({ x: 0, y: 0 });
    }
  }, [isZoomed]);

  const handleWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.2 : 0.2;
    setScale((prev) => Math.min(Math.max(prev + delta, 0.5), 5));
  }, []);

  const handleZoomIn = () => {
    setScale((prev) => Math.min(prev + 0.5, 5));
  };

  const handleZoomOut = () => {
    setScale((prev) => Math.max(prev - 0.5, 0.5));
  };

  const handleReset = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (scale > 1) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && scale > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch events for mobile pinch-to-zoom
  const [lastTouchDistance, setLastTouchDistance] = useState<number | null>(null);
  const [lastTouchCenter, setLastTouchCenter] = useState<{ x: number; y: number } | null>(null);

  const getTouchDistance = (touches: React.TouchList) => {
    if (touches.length < 2) return null;
    const dx = touches[0].clientX - touches[1].clientX;
    const dy = touches[0].clientY - touches[1].clientY;
    return Math.sqrt(dx * dx + dy * dy);
  };

  const getTouchCenter = (touches: React.TouchList) => {
    if (touches.length < 2) return null;
    return {
      x: (touches[0].clientX + touches[1].clientX) / 2,
      y: (touches[0].clientY + touches[1].clientY) / 2,
    };
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      setLastTouchDistance(getTouchDistance(e.touches));
      setLastTouchCenter(getTouchCenter(e.touches));
    } else if (e.touches.length === 1 && scale > 1) {
      setIsDragging(true);
      setDragStart({
        x: e.touches[0].clientX - position.x,
        y: e.touches[0].clientY - position.y,
      });
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      const newDistance = getTouchDistance(e.touches);
      if (newDistance && lastTouchDistance) {
        const delta = (newDistance - lastTouchDistance) * 0.01;
        setScale((prev) => Math.min(Math.max(prev + delta, 0.5), 5));
        setLastTouchDistance(newDistance);
      }
    } else if (e.touches.length === 1 && isDragging && scale > 1) {
      setPosition({
        x: e.touches[0].clientX - dragStart.x,
        y: e.touches[0].clientY - dragStart.y,
      });
    }
  };

  const handleTouchEnd = () => {
    setLastTouchDistance(null);
    setLastTouchCenter(null);
    setIsDragging(false);
  };

  if (!product) {
    return (
      <main className="pt-44 lg:pt-48 pb-20">
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

  const currentImage = showOn ? product.imageOn : product.imageOff;

  return (
    <main className="pt-44 lg:pt-48 pb-20">
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
              onClick={() => setIsZoomed(true)}
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

      {/* Zoom Modal with Full Control */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex flex-col"
          >
            {/* Header Controls */}
            <div className="flex items-center justify-between p-4 border-b border-border">
              <div className="flex items-center gap-2">
                <button
                  onClick={handleZoomOut}
                  className="p-2 bg-muted hover:bg-muted/80 rounded-lg transition-colors"
                  title="Zoom Out"
                >
                  <ZoomOut size={20} />
                </button>
                <span className="px-3 py-1 bg-muted rounded-lg text-sm font-medium min-w-[60px] text-center">
                  {Math.round(scale * 100)}%
                </span>
                <button
                  onClick={handleZoomIn}
                  className="p-2 bg-muted hover:bg-muted/80 rounded-lg transition-colors"
                  title="Zoom In"
                >
                  <ZoomIn size={20} />
                </button>
                <button
                  onClick={handleReset}
                  className="p-2 bg-muted hover:bg-muted/80 rounded-lg transition-colors ml-2"
                  title="Reset"
                >
                  <RotateCcw size={20} />
                </button>
              </div>

              {/* Toggle OFF/ON with Icons */}
              <div className="flex items-center gap-2 bg-muted rounded-full p-1">
                <button
                  onClick={() => setShowOn(false)}
                  className={cn(
                    "p-2 rounded-full transition-colors flex items-center gap-2",
                    !showOn ? "bg-primary text-primary-foreground" : "text-foreground/60 hover:text-foreground"
                  )}
                  title={t.hero.off}
                >
                  <LightbulbOff size={18} />
                  <span className="text-sm font-medium hidden sm:inline">{t.hero.off}</span>
                </button>
                <button
                  onClick={() => setShowOn(true)}
                  className={cn(
                    "p-2 rounded-full transition-colors flex items-center gap-2",
                    showOn ? "bg-primary text-primary-foreground" : "text-foreground/60 hover:text-foreground"
                  )}
                  title={t.hero.on}
                >
                  <Lightbulb size={18} />
                  <span className="text-sm font-medium hidden sm:inline">{t.hero.on}</span>
                </button>
              </div>

              <button
                onClick={() => setIsZoomed(false)}
                className="p-2 bg-muted hover:bg-muted/80 rounded-lg transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Zoomable Image Area */}
            <div
              ref={containerRef}
              className="flex-1 overflow-hidden cursor-grab active:cursor-grabbing"
              onWheel={handleWheel}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className="w-full h-full flex items-center justify-center"
                style={{
                  transform: `translate(${position.x}px, ${position.y}px)`,
                }}
              >
                <img
                  src={currentImage}
                  alt={product.name}
                  className="max-w-none select-none"
                  style={{
                    transform: `scale(${scale})`,
                    transition: isDragging ? "none" : "transform 0.2s ease-out",
                  }}
                  draggable={false}
                />
              </div>
            </div>

            {/* Helper Text */}
            <div className="p-4 text-center text-sm text-muted-foreground border-t border-border">
              {language === "id" 
                ? "Scroll atau pinch untuk zoom • Drag untuk geser gambar" 
                : "Scroll or pinch to zoom • Drag to pan"}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default ProductDetailPage;
