import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { galleryItems } from "@/data/gallery";
import { useLanguage } from "@/contexts/LanguageContext";

const ApplicationsPage = () => {
  const { t } = useLanguage();

  const residential = galleryItems.filter((item) => item.category === "residential");
  const commercial = galleryItems.filter((item) => item.category === "commercial");

  return (
    <main className="pt-44 lg:pt-48 pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="font-display text-4xl md:text-5xl font-medium mb-4">
            {t.nav.applications}
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Inspirasi pengaplikasian batu luminous dalam berbagai setting interior
          </p>
        </motion.div>

        {/* Navigation Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Link to="/pengaplikasian/residensial" className="group block">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden card-premium">
                <img
                  src={residential[0]?.image}
                  alt="Residensial"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h2 className="font-display text-3xl font-medium mb-2 group-hover:text-primary transition-colors">
                    {t.nav.residential}
                  </h2>
                  <p className="text-muted-foreground">
                    Ruang tamu, kamar mandi, dan area pribadi
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link to="/pengaplikasian/komersial" className="group block">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden card-premium">
                <img
                  src={commercial[0]?.image}
                  alt="Komersial"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h2 className="font-display text-3xl font-medium mb-2 group-hover:text-primary transition-colors">
                    {t.nav.commercial}
                  </h2>
                  <p className="text-muted-foreground">
                    Hotel, restoran, dan ruang bisnis
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default ApplicationsPage;
