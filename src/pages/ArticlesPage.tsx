import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { articles } from "@/data/articles";
import { useLanguage } from "@/contexts/LanguageContext";

const ArticlesPage = () => {
  const { t, language } = useLanguage();

  return (
    <main className="pt-44 lg:pt-48 pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="font-display text-4xl md:text-5xl font-medium mb-4">
            {t.nav.articles}
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {language === "id" 
              ? "Temukan inspirasi, panduan, dan tips seputar Luminous Stone"
              : "Discover inspiration, guides, and tips about Luminous Stone"}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={`/artikel/${article.slug}`} className="group block h-full">
                <div className="card-premium overflow-hidden h-full flex flex-col">
                  <div className="image-hover aspect-video">
                    <img
                      src={article.image}
                      alt={language === "id" ? article.title : article.titleEn}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-3">
                      {(language === "id" ? article.tags : article.tagsEn).slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                      <span className="text-xs text-muted-foreground ml-auto">
                        {language === "id" ? article.readTime : article.readTimeEn}
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-medium mb-2 group-hover:text-primary transition-colors">
                      {language === "id" ? article.title : article.titleEn}
                    </h3>
                    <p className="text-sm text-muted-foreground flex-1 line-clamp-3">
                      {language === "id" ? article.excerpt : article.excerptEn}
                    </p>
                    <div className="mt-4 flex items-center text-primary text-sm font-medium">
                      {t.common.readMore}
                      <ArrowRight
                        size={14}
                        className="ml-1 group-hover:translate-x-1 transition-transform"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ArticlesPage;
