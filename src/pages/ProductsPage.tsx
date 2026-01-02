import { motion } from "framer-motion";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { useLanguage } from "@/contexts/LanguageContext";

const ProductsPage = () => {
  const { t } = useLanguage();

  return (
    <main className="pt-44 lg:pt-48 pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="font-display text-4xl md:text-5xl font-medium mb-4">
            {t.nav.products}
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Koleksi panel batu luminous premium kami yang menggabungkan keindahan alam dengan teknologi pencahayaan modern
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default ProductsPage;
