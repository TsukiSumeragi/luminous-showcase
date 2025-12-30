import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { getResidentialGallery, getCommercialGallery, GalleryItem } from "@/data/gallery";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

const ApplicationGalleryPage = () => {
  const { category } = useParams<{ category: string }>();
  const { t } = useLanguage();

  const isResidential = category === "residensial";
  const items = isResidential ? getResidentialGallery() : getCommercialGallery();
  const title = isResidential ? t.nav.residential : t.nav.commercial;

  return (
    <main className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            to="/pengaplikasian"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={18} />
            <span>Kembali</span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="font-display text-4xl md:text-5xl font-medium mb-4">
            {title}
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {isResidential
              ? "Transformasi ruang pribadi Anda dengan keindahan batu luminous"
              : "Tingkatkan kesan premium ruang bisnis dengan panel batu backlit"}
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="card-premium overflow-hidden">
                <div className="relative aspect-video image-hover">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl font-medium mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Back to Home */}
        <div className="text-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/">{t.common.backToHome}</Link>
          </Button>
        </div>
      </div>
    </main>
  );
};

export default ApplicationGalleryPage;
