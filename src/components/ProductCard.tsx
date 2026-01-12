import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { products, Product } from "@/data/products";
import { useLanguage } from "@/contexts/LanguageContext";

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard = ({ product, index }: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <Link to={`/produk/${product.code}`} className="group block">
        <div className="card-premium overflow-hidden">
          <div className="relative aspect-square image-hover">
            <img
              src={product.imageOn}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="p-5">
            <p className="text-xs text-primary font-medium mb-1">{product.code}</p>
            <h3 className="font-display text-xl font-medium mb-2 group-hover:text-primary transition-colors">
              {product.name}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {product.shortDescription}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {product.features.slice(0, 2).map((feature) => (
                <span
                  key={feature}
                  className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

interface OtherProductsProps {
  currentProductId: string;
}

export const OtherProducts = ({ currentProductId }: OtherProductsProps) => {
  const { t } = useLanguage();
  const otherProducts = products.filter((p) => p.id !== currentProductId).slice(0, 4);

  return (
    <div>
      <h3 className="font-display text-2xl font-medium mb-6">{t.common.otherProducts}</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {otherProducts.map((product) => (
          <Link
            key={product.id}
            to={`/produk/${product.code}`}
            className="group card-premium overflow-hidden"
          >
            <div className="aspect-square image-hover">
              <img
                src={product.imageOn}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-3">
              <p className="text-xs text-primary">{product.code}</p>
              <h4 className="text-sm font-medium group-hover:text-primary transition-colors">
                {product.name}
              </h4>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
