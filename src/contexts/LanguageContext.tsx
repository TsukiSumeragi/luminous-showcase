import { useState, useEffect, createContext, useContext, ReactNode } from "react";

type Language = "id" | "en";

interface Translations {
  nav: {
    home: string;
    products: string;
    applications: string;
    articles: string;
    contact: string;
    residential: string;
    commercial: string;
  };
  hero: {
    tagline: string;
    subtitle: string;
    off: string;
    on: string;
  };
  common: {
    orderNow: string;
    backToHome: string;
    viewAll: string;
    readMore: string;
    otherProducts: string;
    otherArticles: string;
    sendMessage: string;
  };
  contact: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    message: string;
    send: string;
    success: string;
  };
  footer: {
    socialMedia: string;
    productInfo: string;
    catalog: string;
    orderCatalog: string;
    location: string;
    contactUs: string;
  };
}

const translations: Record<Language, Translations> = {
  id: {
    nav: {
      home: "Beranda",
      products: "Produk",
      applications: "Pengaplikasian",
      articles: "Artikel",
      contact: "Kontak",
      residential: "Residensial",
      commercial: "Komersial",
    },
    hero: {
      tagline: "Keindahan Batu yang Bercahaya",
      subtitle: "Transformasi ruang Anda dengan teknologi backlit stone premium",
      off: "OFF",
      on: "ON",
    },
    common: {
      orderNow: "Pesan Sekarang",
      backToHome: "Kembali ke Beranda",
      viewAll: "Lihat Semua",
      readMore: "Baca Selengkapnya",
      otherProducts: "Opsi Produk Lain",
      otherArticles: "Opsi Artikel Lain",
      sendMessage: "Kirim Pesan",
    },
    contact: {
      title: "Hubungi Kami",
      subtitle: "Kami siap membantu mewujudkan proyek impian Anda",
      name: "Nama Lengkap",
      email: "Alamat Email",
      message: "Pesan Anda",
      send: "Kirim Pesan",
      success: "Pesan berhasil dikirim!",
    },
    footer: {
      socialMedia: "Media Sosial",
      productInfo: "Info Produk",
      catalog: "Katalog",
      orderCatalog: "Pesan Katalog",
      location: "Lokasi",
      contactUs: "Hubungi Kami",
    },
  },
  en: {
    nav: {
      home: "Home",
      products: "Products",
      applications: "Applications",
      articles: "Articles",
      contact: "Contact",
      residential: "Residential",
      commercial: "Commercial",
    },
    hero: {
      tagline: "The Beauty of Luminous Stone",
      subtitle: "Transform your space with premium backlit stone technology",
      off: "OFF",
      on: "ON",
    },
    common: {
      orderNow: "Order Now",
      backToHome: "Back to Home",
      viewAll: "View All",
      readMore: "Read More",
      otherProducts: "Other Products",
      otherArticles: "Other Articles",
      sendMessage: "Send Message",
    },
    contact: {
      title: "Contact Us",
      subtitle: "We're ready to help realize your dream project",
      name: "Full Name",
      email: "Email Address",
      message: "Your Message",
      send: "Send Message",
      success: "Message sent successfully!",
    },
    footer: {
      socialMedia: "Social Media",
      productInfo: "Product Info",
      catalog: "Catalog",
      orderCatalog: "Order Catalog",
      location: "Location",
      contactUs: "Contact Us",
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("id");

  useEffect(() => {
    const saved = localStorage.getItem("language") as Language;
    if (saved && (saved === "id" || saved === "en")) {
      setLanguage(saved);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: handleSetLanguage, t: translations[language] }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
