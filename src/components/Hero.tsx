import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { products } from "@/data/products";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

const Hero = () => {
  const [isOn, setIsOn] = useState(false);
  const { t } = useLanguage();

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden pt-24 pb-8">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />

      {/* Glow Effect */}
      <AnimatePresence>
        {isOn && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center, hsl(38 80% 55% / 0.15) 0%, transparent 70%)",
            }}
          />
        )}
      </AnimatePresence>

      <div className="container mx-auto px-4 relative z-10">
        {/* Product Collage - Desktop (Grid) */}
        <div className="hidden md:block relative">
          <div className="grid grid-cols-5 gap-4 max-w-7xl mx-auto">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="relative group"
              >
                <Link to={`/produk/${product.id}`}>
                  <div
                    className={cn(
                      "relative aspect-[1/2] rounded-lg overflow-hidden transition-all duration-500 cursor-pointer hover:scale-[1.02]",
                      isOn && "glow-border animate-glow-pulse"
                    )}
                  >
                    {/* OFF Image */}
                    <img
                      src={product.imageOff}
                      alt={`${product.name} OFF`}
                      className={cn(
                        "absolute inset-0 w-full h-full object-cover transition-opacity duration-700",
                        isOn ? "opacity-0" : "opacity-100"
                      )}
                    />
                    {/* ON Image */}
                    <img
                      src={product.imageOn}
                      alt={`${product.name} ON`}
                      className={cn(
                        "absolute inset-0 w-full h-full object-cover transition-opacity duration-700",
                        isOn ? "opacity-100" : "opacity-0"
                      )}
                    />

                    {/* Product Info Overlay */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-background/90 to-transparent"
                    >
                      <p className="text-xs text-primary font-medium">{product.code}</p>
                      <h3 className="text-sm font-display font-medium text-foreground">
                        {product.name}
                      </h3>
                    </motion.div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Toggle Arrows - Desktop */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none px-4">
            <AnimatePresence>
              {isOn && (
                <motion.button
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  onClick={handleToggle}
                  className="pointer-events-auto w-12 h-12 flex items-center justify-center rounded-full bg-card border border-border hover:border-primary transition-colors"
                >
                  <ChevronLeft className="text-foreground" />
                </motion.button>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {!isOn && (
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  onClick={handleToggle}
                  className="pointer-events-auto w-12 h-12 flex items-center justify-center rounded-full bg-card border border-border hover:border-primary transition-colors ml-auto"
                >
                  <ChevronRight className="text-foreground" />
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Product Collage - Mobile (Vertical Stack / Burger Style) */}
        <div className="md:hidden relative">
          <div className="flex flex-col gap-3 max-w-sm mx-auto pr-16">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="relative"
              >
                <Link to={`/produk/${product.id}`}>
                  <div
                    className={cn(
                      "relative aspect-[16/12] rounded-lg overflow-hidden transition-all duration-500 cursor-pointer hover:scale-[1.02]",
                      isOn && "glow-border"
                    )}
                  >
                    {/* OFF Image */}
                    <img
                      src={product.imageOff}
                      alt={`${product.name} OFF`}
                      className={cn(
                        "absolute inset-0 w-full h-full object-cover transition-opacity duration-700",
                        isOn ? "opacity-0" : "opacity-100"
                      )}
                    />
                    {/* ON Image */}
                    <img
                      src={product.imageOn}
                      alt={`${product.name} ON`}
                      className={cn(
                        "absolute inset-0 w-full h-full object-cover transition-opacity duration-700",
                        isOn ? "opacity-100" : "opacity-0"
                      )}
                    />

                    {/* Product Info Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-background/90 to-transparent">
                      <p className="text-xs text-primary font-medium">{product.code}</p>
                      <h3 className="text-sm font-display font-medium text-foreground">
                        {product.name}
                      </h3>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Toggle Arrow - Mobile (Right Center) */}
          <div className="absolute top-1/2 -translate-y-1/2 right-2">
            <AnimatePresence mode="wait">
              {isOn ? (
                <motion.button
                  key="left"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  onClick={handleToggle}
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-card border border-border hover:border-primary transition-colors"
                >
                  <ChevronLeft className="text-foreground" />
                </motion.button>
              ) : (
                <motion.button
                  key="right"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  onClick={handleToggle}
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-card border border-border hover:border-primary transition-colors"
                >
                  <ChevronRight className="text-foreground" />
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* OFF/ON Status Indicator - Below Hero */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center items-center gap-4 mt-8"
        >
          <span
            className={cn(
              "text-sm uppercase tracking-widest transition-colors",
              !isOn ? "text-primary" : "text-muted-foreground"
            )}
          >
            {t.hero.off}
          </span>
          <div
            className={cn(
              "w-12 h-1 rounded-full transition-colors",
              isOn ? "bg-primary" : "bg-muted"
            )}
          />
          <span
            className={cn(
              "text-sm uppercase tracking-widest transition-colors",
              isOn ? "text-primary" : "text-muted-foreground"
            )}
          >
            {t.hero.on}
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
