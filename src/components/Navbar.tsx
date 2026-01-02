import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setIsDropdownOpen(false);
  }, [location]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navItems = [
    { label: t.nav.home, path: "/" },
    { label: t.nav.products, path: "/produk" },
    {
      label: t.nav.applications,
      path: "/pengaplikasian",
      dropdown: [
        { label: t.nav.residential, path: "/pengaplikasian/residensial" },
        { label: t.nav.commercial, path: "/pengaplikasian/komersial" },
      ],
    },
    { label: t.nav.articles, path: "/artikel" },
    { label: t.nav.contact, path: "/kontak" },
  ];

  // Mobile should only show "Menu Utama" (top-level pages)
  const mobileNavItems = navItems.map(({ label, path }) => ({ label, path }));

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "glass py-3" : "bg-background/80 backdrop-blur-md py-4"
      )}
    >
      <div className="container mx-auto px-4">
        {/* Desktop Navigation - Stacked Layout */}
        <nav className="hidden lg:flex flex-col items-center gap-3">
          {/* Logo Row */}
          <Link to="/">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <img src="/logo.webp" alt="Luminous Stone" className="h-24 w-auto mx-auto" />
            </motion.div>
          </Link>

          {/* Menu Row */}
          <div className="flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative"
                onMouseEnter={() => item.dropdown && setIsDropdownOpen(true)}
                onMouseLeave={() => item.dropdown && setIsDropdownOpen(false)}
              >
                {item.dropdown ? (
                  <div className="relative">
                    <button
                      className={cn(
                        "flex items-center gap-1 font-body text-sm uppercase tracking-widest transition-colors",
                        isActive(item.path)
                          ? "text-primary"
                          : "text-foreground/80 hover:text-primary"
                      )}
                    >
                      {item.label}
                      <ChevronDown
                        size={14}
                        className={cn(
                          "transition-transform",
                          isDropdownOpen && "rotate-180"
                        )}
                      />
                    </button>
                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 mt-2 min-w-[180px] bg-card border border-border rounded-lg shadow-lg overflow-hidden z-50"
                        >
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.path}
                              to={subItem.path}
                              className={cn(
                                "block px-4 py-3 text-sm transition-colors hover:bg-muted",
                                isActive(subItem.path)
                                  ? "text-primary bg-muted"
                                  : "text-foreground/80"
                              )}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={cn(
                      "link-underline font-body text-sm uppercase tracking-widest transition-colors",
                      isActive(item.path)
                        ? "text-primary"
                        : "text-foreground/80 hover:text-primary"
                    )}
                  >
                    {item.label}
                  </Link>
                )}
              </motion.div>
            ))}

            {/* Language Switcher */}
            <div className="flex items-center border border-border rounded-full overflow-hidden ml-4">
              <button
                onClick={() => setLanguage("id")}
                className={cn(
                  "px-3 py-1 text-xs font-medium transition-colors",
                  language === "id"
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground/60 hover:text-foreground"
                )}
              >
                ID
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={cn(
                  "px-3 py-1 text-xs font-medium transition-colors",
                  language === "en"
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground/60 hover:text-foreground"
                )}
              >
                EN
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <nav className="lg:hidden">
          {/* Mobile Header - Burger, Logo, Language */}
          <div className="flex items-center justify-between">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground p-2 touch-manipulation"
              aria-label={language === "id" ? "Buka menu" : "Open menu"}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Mobile Logo */}
            <Link to="/">
              <img src="/logo.webp" alt="Luminous Stone" className="h-14 w-auto" />
            </Link>

            {/* Language Switcher */}
            <div className="flex items-center border border-border rounded-full overflow-hidden">
              <button
                onClick={() => setLanguage("id")}
                className={cn(
                  "px-2.5 py-1 text-xs font-medium transition-colors touch-manipulation",
                  language === "id"
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground/60 hover:text-foreground"
                )}
              >
                ID
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={cn(
                  "px-2.5 py-1 text-xs font-medium transition-colors touch-manipulation",
                  language === "en"
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground/60 hover:text-foreground"
                )}
              >
                EN
              </button>
            </div>
          </div>

          {/* Mobile Menu Overlay with Click-Away */}
          <AnimatePresence>
            {isOpen && (
              <>
                {/* Dimmed backdrop - click to close */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="fixed inset-0 bg-black/60 z-[60]"
                  onClick={() => setIsOpen(false)}
                  aria-label={language === "id" ? "Tutup menu" : "Close menu"}
                />
                
                {/* Slide-out menu panel */}
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "-100%" }}
                  transition={{ type: "tween", duration: 0.3 }}
                  className="fixed inset-y-0 left-0 w-4/5 max-w-sm bg-black z-[70]"
                >
                  {/* Overlay Header */}
                  <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
                    <p className="font-display text-2xl font-medium text-white">
                      {language === "id" ? "Menu Utama" : "Main Menu"}
                    </p>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-white"
                      aria-label={language === "id" ? "Tutup menu" : "Close menu"}
                    >
                      <X size={22} />
                    </button>
                  </div>

                  {/* Items */}
                  <div className="h-[calc(100dvh-84px)] overflow-y-auto">
                    {mobileNavItems.map((item, index) => (
                      <motion.div
                        key={item.path}
                        initial={{ opacity: 0, x: -16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.03 }}
                        className="border-b border-white/10"
                      >
                        <Link
                          to={item.path}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            "block px-6 py-5 text-lg font-medium transition-colors touch-manipulation text-white",
                            isActive(item.path)
                              ? "text-primary bg-white/10"
                              : "hover:bg-white/5 active:bg-white/10"
                          )}
                        >
                          {item.label}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
