import { motion } from "framer-motion";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

const ContactPage = () => {
  const { t, language } = useLanguage();

  const contactInfo = [
    {
      icon: MapPin,
      title: t.contact.address,
      content: [
        "Kawasan Bizpoint Multiguna,",
        "Jl. Pemda Tigaraksa No.7,",
        "Sukamulya, Kec. Cikupa,",
        "Kabupaten Tangerang, Banten 15710"
      ],
    },
    {
      icon: Phone,
      title: t.contact.phone,
      content: [
        "(021)-222-00988",
        "(021)-222-00989"
      ],
    },
    {
      icon: Clock,
      title: t.contact.workingHours,
      content: [
        language === "id" ? "Senin - Jumat: 08:30 - 16:30" : "Monday - Friday: 08:30 - 16:30",
        language === "id" ? "Sabtu, Minggu & Libur: Tutup" : "Saturday, Sunday & Holidays: Closed"
      ],
    },
  ];

  return (
    <main className="pt-44 lg:pt-48 pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="font-display text-4xl md:text-5xl font-medium mb-4">
            {t.contact.title}
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {t.contact.subtitle}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card-premium p-6 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-medium mb-3">
                  {info.title}
                </h3>
                <div className="space-y-1">
                  {info.content.map((line, i) => (
                    <p key={i} className="text-muted-foreground text-sm">
                      {line}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="card-premium p-8 text-center"
          >
            <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-display text-2xl font-medium mb-3">
              {t.contact.contactViaWhatsapp}
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              {t.contact.whatsappDesc}
            </p>
            <Button
              asChild
              size="lg"
              className="bg-[#25D366] hover:bg-[#20BD5A] text-white"
            >
              <a
                href="https://api.whatsapp.com/send/?phone=6289666150888&text=Halo,%20saya%20ingin%20bertanya%20tentang%20produk%20Luminous%20Stone"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2" size={20} />
                +62 896 6615 0888
              </a>
            </Button>
          </motion.div>

          {/* Google Maps Embed */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-12"
          >
            <div className="card-premium overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.7438851089783!2d106.50095!3d-6.28560!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e42069d6f9a8a8f%3A0x8c5d12e8a7c5d5f0!2sPT%20Frantinco%20Indah%20Makmur%20(HPL)!5e0!3m2!1sen!2sid!4v1704000000000!5m2!1sen!2sid"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={language === "id" ? "Lokasi PT. Frantinco Indah Makmur" : "PT. Frantinco Indah Makmur Location"}
                className="w-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;