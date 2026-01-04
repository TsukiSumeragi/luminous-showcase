import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Lightbulb, LightbulbOff } from "lucide-react";
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
    // h-screen dan pt-32 agar logo Frantinco tidak mentok atas
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

        {/* Container Utama Produk & Navigasi */}
        <div className="relative flex-1 flex flex-col md:grid md:grid-cols-5 gap-3 md:gap-4 max-w-7xl mx-auto w-full">
          
          {/* Loop Produk (5 Strips Horizontal di Mobile) */}
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.1 }}
              className="relative flex-1"
            >
              {/* HYPERLINK KE DETAIL PRODUK TETAP AKTIF */}
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

          {/* NAVIGASI ICON ON/OFF */}
          <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between pointer-events-none z-30 px-2">
            {/* Tombol OFF (muncul saat ON) */}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ 
                opacity: isOn ? 1 : 0, 
                x: isOn ? 0 : -20, 
                pointerEvents: isOn ? "auto" : "none" 
              }}
              onClick={() => setIsOn(false)}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-black/60 border border-white/10 text-white backdrop-blur-md hover:bg-amber-500 transition-all"
              title={t.hero.off}
            >
              <LightbulbOff className="w-6 h-6" />
            </motion.button>

            {/* Tombol ON (muncul saat OFF) */}
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ 
                opacity: !isOn ? 1 : 0, 
                x: !isOn ? 0 : 20, 
                pointerEvents: !isOn ? "auto" : "none" 
              }}
              onClick={() => setIsOn(true)}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-black/60 border border-white/10 text-amber-400 backdrop-blur-md hover:bg-amber-500 hover:text-white transition-all"
              title={t.hero.on}
            >
              <Lightbulb className="w-6 h-6" />
            </motion.button>
          </div>
        </div>

        <div className="flex justify-center items-center gap-4 mt-6">
          <span className={cn("flex items-center gap-1.5 text-[10px] uppercase tracking-widest transition-colors", !isOn ? "text-primary font-bold" : "text-muted-foreground")}>
            <LightbulbOff size={14} />
            {t.hero.off}
          </span>
          <div className={cn("w-12 h-1 rounded-full transition-colors", isOn ? "bg-primary" : "bg-muted")} />
          <span className={cn("flex items-center gap-1.5 text-[10px] uppercase tracking-widest transition-colors", isOn ? "text-primary font-bold" : "text-muted-foreground")}>
            <Lightbulb size={14} />
            {t.hero.on}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;