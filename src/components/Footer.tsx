import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  const navItems = [
    { label: t.nav.home, path: "/" },
    { label: t.nav.products, path: "/produk" },
    { label: t.nav.applications, path: "/pengaplikasian" },
    { label: t.nav.articles, path: "/artikel" },
    { label: t.nav.contact, path: "/kontak" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/">
            <h2 className="font-display text-2xl font-semibold tracking-wide inline-block">
              <span className="gradient-text">LUMINOUS</span>
              <span className="text-foreground"> STONE</span>
            </h2>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-6 md:gap-10 mb-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="text-sm uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Contact Info */}
        <div className="text-center text-muted-foreground text-sm mb-8">
          <p>WhatsApp: +62 896 6615 0888</p>
        </div>

        {/* Copyright */}
        <div className="text-center text-muted-foreground text-xs">
          <p>© {new Date().getFullYear()} Luminous Stone. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
