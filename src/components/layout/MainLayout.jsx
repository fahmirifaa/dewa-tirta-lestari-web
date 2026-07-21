import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingWhatsApp from "../common/FloatingWhatsApp";
import BackToTop from "../common/BackToTop";

function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <BackToTop />
    </div>
  );
}

export default MainLayout;