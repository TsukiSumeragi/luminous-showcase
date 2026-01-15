import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { getArticleBySlug, getRelatedArticles } from "@/data/articles";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

const ArticleDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t, language } = useLanguage();

  const article = getArticleBySlug(slug || "");

  if (!article) {
    return (
      <main className="pt-44 lg:pt-48 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-3xl mb-4">
            {language === "id" ? "Artikel tidak ditemukan" : "Article not found"}
          </h1>
          <Link to="/artikel" className="text-primary hover:underline">
            {language === "id" ? "Kembali ke Artikel" : "Back to Articles"}
          </Link>
        </div>
      </main>
    );
  }

  const relatedArticles = getRelatedArticles(article.id, article.tags);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString(language === "id" ? "id-ID" : "en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const title = language === "id" ? article.title : article.titleEn;
  const content = language === "id" ? article.content : article.contentEn;
  const tags = language === "id" ? article.tags : article.tagsEn;
  const readTime = language === "id" ? article.readTime : article.readTimeEn;

  return (
    <main className="pt-44 lg:pt-48 pb-20">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            to="/artikel"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={18} />
            <span>{language === "id" ? "Kembali ke Artikel" : "Back to Articles"}</span>
          </Link>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content - Left Column */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-2"
          >
            {/* Featured Image */}
            <div className="aspect-video rounded-lg overflow-hidden mb-8">
              <img
                src={article.image}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Title */}
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium mb-6">
              {title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 mb-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{formatDate(article.date)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>{readTime}</span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Content */}
            <div className="prose prose-invert prose-lg max-w-none">
              {content.split("\n").map((paragraph, index) => {
                // Remove ** markdown bold syntax
                const cleanText = (text: string) => text.replace(/\*\*/g, "");
                
                if (paragraph.startsWith("## ")) {
                  return (
                    <h2
                      key={index}
                      className="font-display text-2xl font-medium mt-8 mb-4 text-foreground"
                    >
                      {cleanText(paragraph.replace("## ", ""))}
                    </h2>
                  );
                }
                if (paragraph.startsWith("### ")) {
                  return (
                    <h3
                      key={index}
                      className="font-display text-xl font-medium mt-6 mb-3 text-foreground"
                    >
                      {cleanText(paragraph.replace("### ", ""))}
                    </h3>
                  );
                }
                if (paragraph.startsWith("- ")) {
                  return (
                    <li key={index} className="text-muted-foreground ml-4">
                      {cleanText(paragraph.replace("- ", ""))}
                    </li>
                  );
                }
                if (paragraph.match(/^\d+\./)) {
                  return (
                    <p key={index} className="text-muted-foreground mb-2 leading-relaxed">
                      {cleanText(paragraph)}
                    </p>
                  );
                }
                if (paragraph.trim()) {
                  return (
                    <p key={index} className="text-muted-foreground mb-4 leading-relaxed">
                      {cleanText(paragraph)}
                    </p>
                  );
                }
                return null;
              })}
            </div>

            {/* Back to Home */}
            <div className="mt-12">
              <Button asChild variant="outline" size="lg">
                <Link to="/">{t.common.backToHome}</Link>
              </Button>
            </div>
          </motion.article>

          {/* Sidebar - Right Column */}
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-32">
              <h3 className="font-display text-xl font-medium mb-6">
                {t.common.otherArticles}
              </h3>
              <div className="space-y-4">
                {relatedArticles.map((related) => (
                  <Link
                    key={related.id}
                    to={`/artikel/${related.slug}`}
                    className="group block card-premium overflow-hidden"
                  >
                    <div className="aspect-video image-hover">
                      <img
                        src={related.image}
                        alt={language === "id" ? related.title : related.titleEn}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium text-sm group-hover:text-primary transition-colors line-clamp-2">
                        {language === "id" ? related.title : related.titleEn}
                      </h4>
                      <p className="text-xs text-muted-foreground mt-1">
                        {language === "id" ? related.readTime : related.readTimeEn}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Tags Cloud */}
              <div className="mt-8">
                <h4 className="font-display text-lg font-medium mb-4">Tags</h4>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </main>
  );
};

export default ArticleDetailPage;
