import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import Navbar from "./components/Navbar";
import BottomNav from "./components/BottomNav";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ApplicationsPage from "./pages/ApplicationsPage";
import ApplicationGalleryPage from "./pages/ApplicationGalleryPage";
import ArticlesPage from "./pages/ArticlesPage";
import ArticleDetailPage from "./pages/ArticleDetailPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-1">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/produk" element={<ProductsPage />} />
                <Route path="/produk/:code" element={<ProductDetailPage />} />
                <Route path="/pengaplikasian" element={<ApplicationsPage />} />
                <Route path="/pengaplikasian/:category" element={<ApplicationGalleryPage />} />
                <Route path="/artikel" element={<ArticlesPage />} />
                <Route path="/artikel/:slug" element={<ArticleDetailPage />} />
                <Route path="/kontak" element={<ContactPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
            <Footer />
            <BottomNav />
            <FloatingWhatsApp />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
