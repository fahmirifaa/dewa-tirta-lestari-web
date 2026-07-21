import { Routes, Route } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import ServiceAreas from "../pages/ServiceAreas";
import Gallery from "../pages/Gallery";
import Articles from "../pages/Articles";
import ArticleDetail from "../pages/ArticleDetail";
import Testimonials from "../pages/Testimonials";
import Faq from "../pages/Faq";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/tentang-kami" element={<About />} />
        <Route path="/layanan" element={<Services />} />
        <Route path="/area-layanan" element={<ServiceAreas />} />
        <Route path="/galeri" element={<Gallery />} />
        <Route path="/artikel" element={<Articles />} />
        <Route path="/artikel/:slug" element={<ArticleDetail />} />
        <Route path="/testimoni" element={<Testimonials />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/hubungi-kami" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;