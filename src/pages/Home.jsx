import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import WhyChooseUsSection from "../components/sections/WhyChooseUsSection";
import ServicesSection from "../components/sections/ServicesSection";
import FilteringProcessSection from "../components/sections/FilteringProcessSection";
import StatsSection from "../components/sections/StatsSection";
import ServiceAreaSection from "../components/sections/ServiceAreaSection";
import GallerySection from "../components/sections/GallerySection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import ArticlesSection from "../components/sections/ArticlesSection";
import FaqSection from "../components/sections/FaqSection";
import MapSection from "../components/sections/MapSection";

function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <WhyChooseUsSection />
      <ServicesSection />
      <FilteringProcessSection />
      <StatsSection />
      <ServiceAreaSection />
      <GallerySection />
      <TestimonialsSection />
      <ArticlesSection />
      <FaqSection />
      <MapSection />
    </div>
  );
}

export default Home;