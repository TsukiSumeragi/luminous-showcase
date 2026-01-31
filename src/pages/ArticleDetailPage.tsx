import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { getArticleBySlug, getRelatedArticles } from "@/data/articles";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
              {(() => {
                const lines = content.split("\n");
                const elements: React.ReactNode[] = [];
                let i = 0;
                
                // Remove ** markdown bold syntax
                const cleanText = (text: string) => text.replace(/\*\*/g, "");
                
                while (i < lines.length) {
                  const line = lines[i];
                  
                  // Check for table (starts with |)
                  if (line.trim().startsWith("|")) {
                    const tableLines: string[] = [];
                    while (i < lines.length && lines[i].trim().startsWith("|")) {
                      tableLines.push(lines[i]);
                      i++;
                    }
                    
                    // Parse table
                    if (tableLines.length >= 2) {
                      const headerRow = tableLines[0].split("|").filter(cell => cell.trim());
                      const dataRows = tableLines.slice(2).map(row => 
                        row.split("|").filter(cell => cell.trim())
                      );
                      
                      elements.push(
                        <div key={`table-${i}`} className="overflow-x-auto my-8">
                          <table className="w-full border-collapse">
                            <thead>
                              <tr className="border-b border-border">
                                {headerRow.map((cell, cellIdx) => (
                                  <th 
                                    key={cellIdx} 
                                    className="text-left p-3 font-medium text-foreground bg-muted/50"
                                  >
                                    {cleanText(cell.trim())}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {dataRows.map((row, rowIdx) => (
                                <tr key={rowIdx} className="border-b border-border/50">
                                  {row.map((cell, cellIdx) => (
                                    <td 
                                      key={cellIdx} 
                                      className="p-3 text-muted-foreground"
                                    >
                                      {cleanText(cell.trim())}
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      );
                    }
                    continue;
                  }
                  
                  if (line.startsWith("## ")) {
                    elements.push(
                      <h2
                        key={i}
                        className="font-display text-2xl font-medium mt-10 mb-5 text-foreground"
                      >
                        {cleanText(line.replace("## ", ""))}
                      </h2>
                    );
                  } else if (line.startsWith("### ")) {
                    elements.push(
                      <h3
                        key={i}
                        className="font-display text-xl font-medium mt-8 mb-4 text-foreground"
                      >
                        {cleanText(line.replace("### ", ""))}
                      </h3>
                    );
                  } else if (line.startsWith("- ")) {
                    elements.push(
                      <li key={i} className="text-muted-foreground ml-4">
                        {cleanText(line.replace("- ", ""))}
                      </li>
                    );
                  } else if (line.match(/^\d+\./)) {
                    elements.push(
                      <p key={i} className="text-muted-foreground mb-2 leading-relaxed">
                        {cleanText(line)}
                      </p>
                    );
                  } else if (line.trim()) {
                    // Check if line is a subheading like "Luminous Stone:" or "LED Panel" (bold text ending with colon)
                    const isBoldSubheading = line.match(/^\*\*[^*]+:\*\*$/);
                    elements.push(
                      <p key={i} className={cn(
                        "text-muted-foreground leading-relaxed",
                        isBoldSubheading ? "mt-6 mb-2 font-medium text-foreground" : "mb-4"
                      )}>
                        {cleanText(line)}
                      </p>
                    );
                  }
                  i++;
                }
                
                return elements;
              })()}
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
