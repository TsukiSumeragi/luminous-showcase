import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { articles } from "@/data/articles";
import { useLanguage } from "@/contexts/LanguageContext";

const ArticlesSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-medium mb-4">
            {t.nav.articles}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Eksplorasi dunia batu luminous melalui artikel-artikel kami
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {articles.slice(0, 3).map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={`/artikel/${article.slug}`} className="group block">
                <div className="card-premium overflow-hidden">
                  <div className="image-hover aspect-video">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      {article.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-display text-lg font-medium mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="mt-4 flex items-center text-primary text-sm font-medium">
                      {t.common.readMore}
                      <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/artikel"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
          >
            {t.common.viewAll}
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
