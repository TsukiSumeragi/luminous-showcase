import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
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
    <section className="relative h-screen w-full pt-32 pb-8 flex flex-col items-center justify-center overflow-hidden bg-background">
      {/* Background Gradient & Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />
      
      <AnimatePresence>
        {isOn && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at center, hsl(38 80% 55% / 0.1) 0%, transparent 70%)",
            }}
          />
        )}
      </AnimatePresence>

      <div className="container mx-auto px-4 relative z-10 h-full flex flex-col">
        {/* Header Section */}
        <div className="flex flex-col items-center mb-6">
          <p className="text-white/40 text-[10px] tracking-[0.5em] uppercase">{t.hero.ourCollection}</p>
        </div>

        {/* Container Utama Produk */}
        <div className="relative flex-1 flex flex-col md:grid md:grid-cols-5 gap-3 md:gap-4 max-w-7xl mx-auto w-full">
          
          {/* Loop Produk (5 Strips) */}
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.1 }}
              className="relative flex-1"
            >
              <Link to={`/produk/${product.code}`} className="block h-full w-full">
                <div
                  className={cn(
                    "relative h-full w-full rounded-lg overflow-hidden transition-all duration-500 cursor-pointer hover:scale-[1.01]",
                    isOn && "shadow-[0_0_20px_rgba(251,191,36,0.15)]"
                  )}
                >
                  {/* OFF Image */}
                  <img
                    src={product.imageOff}
                    alt={`${product.name} OFF`}
                    className={cn(
                      "absolute inset-0 w-full h-full object-cover transition-opacity duration-1000",
                      isOn ? "opacity-0" : "opacity-100"
                    )}
                  />
                  {/* ON Image */}
                  <img
                    src={product.imageOn}
                    alt={`${product.name} ON`}
                    className={cn(
                      "absolute inset-0 w-full h-full object-cover transition-opacity duration-1000",
                      isOn ? "opacity-100" : "opacity-0"
                    )}
                  />

                  {/* Info Produk Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-[10px] text-amber-500 font-medium tracking-wider uppercase">{product.code}</p>
                    <h3 className="text-[11px] md:text-xs font-display font-medium text-white/90">
                      {product.name}
                    </h3>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Toggle Slider ON/OFF */}
        <div className="flex justify-center items-center gap-4 mt-6">
          <span className={cn("text-[10px] uppercase tracking-widest transition-colors", !isOn ? "text-primary font-bold" : "text-muted-foreground")}>
            {t.hero.off}
          </span>
          
          {/* Toggle Switch */}
          <button
            onClick={handleToggle}
            className={cn(
              "relative w-14 h-7 rounded-full transition-colors duration-300 focus:outline-none",
              isOn ? "bg-primary" : "bg-muted"
            )}
          >
            <motion.div
              className="absolute top-1 left-1 w-5 h-5 rounded-full bg-white shadow-md"
              animate={{ x: isOn ? 28 : 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          </button>
          
          <span className={cn("text-[10px] uppercase tracking-widest transition-colors", isOn ? "text-primary font-bold" : "text-muted-foreground")}>
            {t.hero.on}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;