import { motion } from "framer-motion";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

const ContactPage = () => {
  const { t, language } = useLanguage();

  const contactInfo = [
    {
      icon: MapPin,
      title: language === "id" ? "Alamat" : "Address",
      content: [
        "Kawasan Bizpoint Multiguna,",
        "Jl. Pemda Tigaraksa No.7,",
        "Sukamulya, Kec. Cikupa,",
        "Kabupaten Tangerang, Banten 15710"
      ],
    },
    {
      icon: Phone,
      title: language === "id" ? "Telepon" : "Phone",
      content: [
        "(021)-222-00988",
        "(021)-222-00989"
      ],
    },
    {
      icon: Clock,
      title: language === "id" ? "Jam Kerja" : "Working Hours",
      content: [
        language === "id" ? "Senin - Jumat: 08:30 - 16:30" : "Monday - Friday: 08:30 - 16:30",
        language === "id" ? "Hari Sabtu, Minggu dan Hari Libur: Tutup" : "Saturday, Sunday and Holidays: Closed"
      ],
    },
  ];

  return (
    <main className="pt-32 pb-20">
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
              {language === "id" ? "Hubungi Kami via WhatsApp" : "Contact Us via WhatsApp"}
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              {language === "id" 
                ? "Untuk konsultasi produk dan pemesanan, hubungi kami langsung melalui WhatsApp"
                : "For product consultation and ordering, contact us directly via WhatsApp"}
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.7438851089783!2d106.5031!3d-6.2856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e42069d0c0ac5cd%3A0x83bfa73c0ec74fdf!2sBizpoint%20Multiguna!5e0!3m2!1sen!2sid!4v1704000000000!5m2!1sen!2sid"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi PT. Frantinco Indah Makmur"
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