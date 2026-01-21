import { useParams, Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, MessageCircle, ZoomIn, ZoomOut, X, RotateCcw, Lightbulb, LightbulbOff, ChevronLeft, ChevronRight } from "lucide-react";
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Inner zoom state
  const [isHovering, setIsHovering] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const imageRef = useRef<HTMLDivElement>(null);

  const product = getProductByCode(code || "");

  // Scroll to top when product changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setShowOn(false); // Reset to OFF state
  }, [code]);

  // Reset zoom when modal closes
  useEffect(() => {
    if (!isModalOpen) {
      setScale(1);
      setPosition({ x: 0, y: 0 });
    }
  }, [isModalOpen]);

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

  // Inner zoom handlers
  const handleImageMouseEnter = () => {
    setIsHovering(true);
  };

  const handleImageMouseLeave = () => {
    setIsHovering(false);
  };

  const handleImageMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;
    const rect = imageRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
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
    <main className="pt-32 lg:pt-40 pb-16">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-6"
        >
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={18} />
            <span>{t.common.back}</span>
          </button>
        </motion.div>

        {/* Compact Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 mb-12 max-w-5xl mx-auto">
          {/* Single Image with Toggle & Inner Zoom */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div
              ref={imageRef}
              className={cn(
                "relative aspect-[3/4] rounded-xl overflow-hidden card-premium group cursor-zoom-in max-w-md mx-auto lg:mx-0",
                showOn && "glow-border"
              )}
              onMouseEnter={handleImageMouseEnter}
              onMouseLeave={handleImageMouseLeave}
              onMouseMove={handleImageMouseMove}
              onClick={() => setIsModalOpen(true)}
            >
              {/* OFF Image */}
              <img
                src={product.imageOff}
                alt={`${product.name} - OFF`}
                className={cn(
                  "absolute inset-0 w-full h-full object-cover transition-opacity duration-500",
                  showOn ? "opacity-0" : "opacity-100"
                )}
                style={
                  isHovering && !showOn
                    ? {
                        transformOrigin: `${mousePos.x}% ${mousePos.y}%`,
                        transform: "scale(2)",
                        transition: "transform 0.15s ease-out",
                      }
                    : {
                        transform: "scale(1)",
                        transition: "transform 0.3s ease-out, opacity 0.5s",
                      }
                }
              />
              {/* ON Image */}
              <img
                src={product.imageOn}
                alt={`${product.name} - ON`}
                className={cn(
                  "absolute inset-0 w-full h-full object-cover transition-opacity duration-500",
                  showOn ? "opacity-100" : "opacity-0"
                )}
                style={
                  isHovering && showOn
                    ? {
                        transformOrigin: `${mousePos.x}% ${mousePos.y}%`,
                        transform: "scale(2)",
                        transition: "transform 0.15s ease-out",
                      }
                    : {
                        transform: "scale(1)",
                        transition: "transform 0.3s ease-out, opacity 0.5s",
                      }
                }
              />

              {/* Bulb Icon Indicator - Top Right (Not a button) */}
              <div
                className={cn(
                  "absolute top-4 right-4 z-20 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 pointer-events-none",
                  showOn
                    ? "bg-primary/90 text-primary-foreground shadow-lg shadow-primary/50"
                    : "bg-black/50 text-white/60"
                )}
              >
                {showOn ? (
                  <Lightbulb className="w-7 h-7" />
                ) : (
                  <LightbulbOff className="w-7 h-7" />
                )}
              </div>

              {/* Navigation Arrows Left & Right - Like Hero Slider */}
              <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between pointer-events-none z-10 px-3">
                {/* Left Arrow - OFF (visible when ON) */}
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ 
                    opacity: showOn ? 1 : 0, 
                    x: showOn ? 0 : -20, 
                    pointerEvents: showOn ? "auto" : "none" 
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowOn(false);
                  }}
                  className="w-11 h-11 flex items-center justify-center rounded-full bg-black/60 border border-white/10 text-white backdrop-blur-md hover:bg-primary hover:text-primary-foreground transition-all pointer-events-auto"
                >
                  <ChevronLeft className="w-6 h-6" />
                </motion.button>

                {/* Right Arrow - ON (visible when OFF) */}
                <motion.button
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ 
                    opacity: !showOn ? 1 : 0, 
                    x: !showOn ? 0 : 20, 
                    pointerEvents: !showOn ? "auto" : "none" 
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowOn(true);
                  }}
                  className="w-11 h-11 flex items-center justify-center rounded-full bg-black/60 border border-white/10 text-primary backdrop-blur-md hover:bg-primary hover:text-primary-foreground transition-all pointer-events-auto"
                >
                  <ChevronRight className="w-6 h-6" />
                </motion.button>
              </div>

              {/* Zoom indicator */}
              <div className="absolute bottom-3 left-3 px-2 py-1 bg-background/80 backdrop-blur rounded-md text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                <ZoomIn size={14} />
                <span>{language === "id" ? "Klik untuk zoom" : "Click to zoom"}</span>
              </div>
            </div>
          </motion.div>

          {/* Product Info - Compact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-5"
          >
            <div>
              <p className="text-primary font-medium mb-1 text-sm">{product.code}</p>
              <h1 className="font-display text-3xl md:text-4xl font-medium mb-3">
                {product.name}
              </h1>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {language === "id" ? product.description : product.descriptionEn}
              </p>
            </div>

            {/* Specs - Compact Grid */}
            <div className="grid grid-cols-2 gap-3">
              <div className="card-premium p-3">
                <p className="text-xs text-muted-foreground mb-0.5">{t.common.size}</p>
                <p className="font-medium text-sm">{product.specifications.size}</p>
              </div>
              <div className="card-premium p-3">
                <p className="text-xs text-muted-foreground mb-0.5">{t.common.thickness}</p>
                <p className="font-medium text-sm">{product.specifications.thickness}</p>
              </div>
              <div className="card-premium p-3">
                <p className="text-xs text-muted-foreground mb-0.5">{t.common.weight}</p>
                <p className="font-medium text-sm">{product.specifications.weight}</p>
              </div>
              <div className="card-premium p-3">
                <p className="text-xs text-muted-foreground mb-0.5">{t.common.material}</p>
                <p className="font-medium text-sm">{language === "id" ? product.material : product.materialEn}</p>
              </div>
            </div>

            {/* Features - Compact */}
            <div>
              <p className="text-xs text-muted-foreground mb-2">{t.common.features}:</p>
              <div className="flex flex-wrap gap-1.5">
                {(language === "id" ? product.features : product.featuresEn).map((feature, index) => (
                  <span
                    key={index}
                    className="px-2.5 py-1 bg-muted rounded-full text-xs"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA - Compact */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button
                asChild
                size="default"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle size={16} className="mr-2" />
                  {t.common.orderNow}
                </a>
              </Button>
              <Button asChild variant="outline" size="default">
                <Link to="/">{t.common.backToHome}</Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Other Products */}
        <OtherProducts currentProductId={product.id} />
      </div>

      {/* Clean Modal Popup */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col"
            onClick={() => setIsModalOpen(false)}
          >
            {/* Modal Header */}
            <div 
              className="flex items-center justify-between p-4 border-b border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Zoom Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handleZoomOut}
                  className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                  title="Zoom Out"
                >
                  <ZoomOut size={20} className="text-white" />
                </button>
                <span className="px-3 py-1 bg-white/10 rounded-lg text-sm font-medium min-w-[60px] text-center text-white">
                  {Math.round(scale * 100)}%
                </span>
                <button
                  onClick={handleZoomIn}
                  className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                  title="Zoom In"
                >
                  <ZoomIn size={20} className="text-white" />
                </button>
                <button
                  onClick={handleReset}
                  className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors ml-2"
                  title="Reset"
                >
                  <RotateCcw size={20} className="text-white" />
                </button>
              </div>

              {/* Bulb Icon Indicator */}
              <div
                className={cn(
                  "w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300",
                  showOn
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/50"
                    : "bg-white/10 text-white/60"
                )}
              >
                {showOn ? (
                  <Lightbulb className="w-6 h-6" />
                ) : (
                  <LightbulbOff className="w-6 h-6" />
                )}
              </div>

              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
              >
                <X size={20} className="text-white" />
              </button>
            </div>

            {/* Navigation Arrows in Modal - Like Hero Slider */}
            <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between pointer-events-none z-10 px-4" style={{ top: '60px' }}>
              {/* Left Arrow - OFF (visible when ON) */}
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: showOn ? 1 : 0, 
                  x: showOn ? 0 : -20, 
                  pointerEvents: showOn ? "auto" : "none" 
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  setShowOn(false);
                }}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-black/60 border border-white/10 text-white backdrop-blur-md hover:bg-primary hover:text-primary-foreground transition-all pointer-events-auto"
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>

              {/* Right Arrow - ON (visible when OFF) */}
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ 
                  opacity: !showOn ? 1 : 0, 
                  x: !showOn ? 0 : 20, 
                  pointerEvents: !showOn ? "auto" : "none" 
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  setShowOn(true);
                }}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-black/60 border border-white/10 text-primary backdrop-blur-md hover:bg-primary hover:text-primary-foreground transition-all pointer-events-auto"
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </div>

            {/* Zoomable Image Area */}
            <div
              ref={containerRef}
              className="flex-1 overflow-hidden cursor-grab active:cursor-grabbing"
              onClick={(e) => e.stopPropagation()}
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
                  className="max-h-full max-w-full object-contain select-none"
                  style={{
                    transform: `scale(${scale})`,
                    transition: isDragging ? "none" : "transform 0.2s ease-out",
                  }}
                  draggable={false}
                />
              </div>
            </div>

            {/* Helper Text */}
            <div className="p-3 text-center text-xs text-white/50 border-t border-white/10">
              {language === "id"
                ? "Scroll untuk zoom • Drag untuk geser • Klik lampu untuk toggle ON/OFF"
                : "Scroll to zoom • Drag to pan • Click bulb to toggle ON/OFF"}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default ProductDetailPage;
