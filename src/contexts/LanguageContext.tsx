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
    ourCollection: string;
  };
  common: {
    orderNow: string;
    backToHome: string;
    viewAll: string;
    readMore: string;
    otherProducts: string;
    otherArticles: string;
    sendMessage: string;
    back: string;
    backToProducts: string;
    backToArticles: string;
    features: string;
    size: string;
    thickness: string;
    weight: string;
    material: string;
    tags: string;
    sending: string;
    orContactVia: string;
    weWillContactYou: string;
    writeYourMessage: string;
    clickToZoom: string;
  };
  products: {
    title: string;
    subtitle: string;
    notFound: string;
  };
  articles: {
    title: string;
    subtitle: string;
    notFound: string;
    exploreWorld: string;
  };
  applications: {
    title: string;
    subtitle: string;
    residentialDesc: string;
    commercialDesc: string;
    residentialSubtitle: string;
    commercialSubtitle: string;
  };
  contact: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    message: string;
    send: string;
    success: string;
    address: string;
    phone: string;
    workingHours: string;
    contactViaWhatsapp: string;
    whatsappDesc: string;
  };
  footer: {
    socialMedia: string;
    productInfo: string;
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
      ourCollection: "KOLEKSI KAMI",
    },
    common: {
      orderNow: "Pesan Sekarang",
      backToHome: "Kembali ke Beranda",
      viewAll: "Lihat Semua",
      readMore: "Baca Selengkapnya",
      otherProducts: "Opsi Produk Lain",
      otherArticles: "Opsi Artikel Lain",
      sendMessage: "Kirim Pesan",
      back: "Kembali",
      backToProducts: "Kembali ke Produk",
      backToArticles: "Kembali ke Artikel",
      features: "Fitur",
      size: "Ukuran",
      thickness: "Ketebalan",
      weight: "Berat",
      material: "Material",
      tags: "Tag",
      sending: "Mengirim...",
      orContactVia: "Atau hubungi langsung via WhatsApp:",
      weWillContactYou: "Kami akan segera menghubungi Anda.",
      writeYourMessage: "Tuliskan pesan Anda...",
      clickToZoom: "Klik untuk memperbesar",
    },
    products: {
      title: "Produk",
      subtitle: "Koleksi panel batu luminous premium kami yang menggabungkan keindahan alam dengan teknologi pencahayaan modern",
      notFound: "Produk tidak ditemukan",
    },
    articles: {
      title: "Artikel",
      subtitle: "Temukan inspirasi, panduan, dan tips seputar batu luminous",
      notFound: "Artikel tidak ditemukan",
      exploreWorld: "Eksplorasi dunia batu luminous melalui artikel-artikel kami",
    },
    applications: {
      title: "Pengaplikasian",
      subtitle: "Inspirasi pengaplikasian batu luminous dalam berbagai setting interior",
      residentialDesc: "Ruang tamu, kamar mandi, dan area pribadi",
      commercialDesc: "Aplikasi panel batu luminous untuk hotel, restoran, dan ruang bisnis",
      residentialSubtitle: "Transformasi ruang pribadi Anda dengan keindahan batu luminous",
      commercialSubtitle: "Tingkatkan kesan premium ruang bisnis dengan panel batu luminous backlit",
    },
    contact: {
      title: "Hubungi Kami",
      subtitle: "Kami siap membantu mewujudkan proyek impian Anda",
      name: "Nama Lengkap",
      email: "Alamat Email",
      message: "Pesan Anda",
      send: "Kirim Pesan",
      success: "Pesan berhasil dikirim!",
      address: "Alamat",
      phone: "Telepon",
      workingHours: "Jam Kerja",
      contactViaWhatsapp: "Hubungi Kami via WhatsApp",
      whatsappDesc: "Untuk konsultasi produk dan pemesanan, hubungi kami langsung melalui WhatsApp",
    },
    footer: {
      socialMedia: "Media Sosial",
      productInfo: "Info Produk",
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
      ourCollection: "OUR COLLECTION",
    },
    common: {
      orderNow: "Order Now",
      backToHome: "Back to Home",
      viewAll: "View All",
      readMore: "Read More",
      otherProducts: "Other Products",
      otherArticles: "Other Articles",
      sendMessage: "Send Message",
      back: "Back",
      backToProducts: "Back to Products",
      backToArticles: "Back to Articles",
      features: "Features",
      size: "Size",
      thickness: "Thickness",
      weight: "Weight",
      material: "Material",
      tags: "Tags",
      sending: "Sending...",
      orContactVia: "Or contact us directly via WhatsApp:",
      weWillContactYou: "We will contact you shortly.",
      writeYourMessage: "Write your message...",
      clickToZoom: "Click to zoom",
    },
    products: {
      title: "Products",
      subtitle: "Our premium luminous stone panel collection combining natural beauty with modern lighting technology",
      notFound: "Product not found",
    },
    articles: {
      title: "Articles",
      subtitle: "Discover inspiration, guides, and tips about luminous stone",
      notFound: "Article not found",
      exploreWorld: "Explore the world of luminous stone through our articles",
    },
    applications: {
      title: "Applications",
      subtitle: "Luminous stone application inspiration in various interior settings",
      residentialDesc: "Living rooms, bathrooms, and private areas",
      commercialDesc: "Hotels, restaurants, and business spaces",
      residentialSubtitle: "Transform your private space with the beauty of luminous stone",
      commercialSubtitle: "Elevate your business space with premium backlit stone panels",
    },
    contact: {
      title: "Contact Us",
      subtitle: "We're ready to help realize your dream project",
      name: "Full Name",
      email: "Email Address",
      message: "Your Message",
      send: "Send Message",
      success: "Message sent successfully!",
      address: "Address",
      phone: "Phone",
      workingHours: "Working Hours",
      contactViaWhatsapp: "Contact Us via WhatsApp",
      whatsappDesc: "For product consultation and ordering, contact us directly via WhatsApp",
    },
    footer: {
      socialMedia: "Social Media",
      productInfo: "Product Info",
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
  const [language, setLanguage] = useState<Language>("en");

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