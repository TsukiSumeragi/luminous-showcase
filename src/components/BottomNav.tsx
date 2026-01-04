import { Link, useLocation } from "react-router-dom";
import { Home, Package, Grid3X3, FileText, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  path: string;
  icon: React.ReactNode;
}

const BottomNav = () => {
  const { t } = useLanguage();
  const location = useLocation();

  const navItems: NavItem[] = [
    { label: t.nav.home, path: "/", icon: <Home size={22} /> },
    { label: t.nav.products, path: "/produk", icon: <Package size={22} /> },
    { label: t.nav.applications, path: "/pengaplikasian", icon: <Grid3X3 size={22} /> },
    { label: t.nav.articles, path: "/artikel", icon: <FileText size={22} /> },
    { label: t.nav.contact, path: "/kontak", icon: <Phone size={22} /> },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-[hsl(var(--drawer-background))] border-t border-border/30 safe-area-bottom">
      <div className="flex items-center justify-around h-16">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              "flex flex-col items-center justify-center gap-0.5 px-2 py-1.5 min-w-[56px] rounded-lg transition-colors touch-manipulation",
              isActive(item.path)
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {item.icon}
            <span className="text-[10px] font-medium leading-tight">{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;
