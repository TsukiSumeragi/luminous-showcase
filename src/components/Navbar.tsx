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

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "glass py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4">
        {/* Desktop Navigation - Stacked Layout */}
        <nav className="hidden lg:flex flex-col items-center">
          {/* Logo Row */}
          <Link to="/" className="mb-4">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="font-display text-3xl font-semibold tracking-wide">
                <span className="gradient-text">LUMINOUS</span>
                <span className="text-foreground"> STONE</span>
              </h1>
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
          {/* Mobile Menu Button & Language */}
          <div className="flex items-center justify-between mb-3">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Language Switcher - Same position as logo */}
            <div className="flex items-center border border-border rounded-full overflow-hidden">
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

          {/* Mobile Logo - Below menu */}
          <Link to="/" className="block text-center">
            <h1 className="font-display text-2xl font-semibold tracking-wide">
              <span className="gradient-text">LUMINOUS</span>
              <span className="text-foreground"> STONE</span>
            </h1>
          </Link>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden mt-4"
              >
                <div className="flex flex-col gap-1 py-4 border-t border-border">
                  {navItems.map((item) => (
                    <div key={item.path}>
                      {item.dropdown ? (
                        <>
                          <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className={cn(
                              "flex items-center justify-between w-full px-4 py-3 text-xs uppercase tracking-widest transition-colors",
                              "text-foreground/80 hover:text-primary"
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
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                className="bg-muted/50 overflow-hidden"
                              >
                                {item.dropdown.map((subItem) => (
                                  <Link
                                    key={subItem.path}
                                    to={subItem.path}
                                    className={cn(
                                      "block px-8 py-3 text-xs uppercase tracking-widest transition-colors",
                                      isActive(subItem.path)
                                        ? "text-primary"
                                        : "text-foreground/60 hover:text-primary"
                                    )}
                                  >
                                    {subItem.label}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link
                          to={item.path}
                          className={cn(
                            "block px-4 py-3 text-xs uppercase tracking-widest transition-colors",
                            isActive(item.path)
                              ? "text-primary"
                              : "text-foreground/80 hover:text-primary"
                          )}
                        >
                          {item.label}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
