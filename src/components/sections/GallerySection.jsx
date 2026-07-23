import { useState } from "react";
import { motion } from "framer-motion";
import { FaSearchPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import SectionHeading from "../common/SectionHeading";
import Lightbox from "../common/Lightbox";
import { galleryData } from "../../data/gallery";

function GallerySection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const featuredImages = galleryData.slice(0, 6);

  function openLightbox(index) {
    setCurrentIndex(index);
    setLightboxOpen(true);
  }

  function handleNext() {
    setCurrentIndex((prev) => (prev + 1) % featuredImages.length);
  }

  function handlePrev() {
    setCurrentIndex((prev) => (prev - 1 + featuredImages.length) % featuredImages.length);
  }

  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-800/50">
      <div className="container-custom">
        <SectionHeading
          badge="Galeri"
          title="Dokumentasi Kegiatan Kami"
          subtitle="Lihat lebih dekat aktivitas operasional, armada, dan fasilitas penyaringan air TIRTA KENCANA ABADI."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          {featuredImages.map((item, index) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              onClick={() => openLightbox(index)}
              className="group relative rounded-xl overflow-hidden aspect-square"
            >
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gray-900/0 group-hover:bg-gray-900/50 transition-colors duration-300 flex items-center justify-center">
                <FaSearchPlus className="text-white text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.button>
          ))}
        </div>

        <div className="text-center">
          <Link to="/galeri" className="btn-outline">
            Lihat Semua Galeri
            <FaArrowRight size={14} />
          </Link>
        </div>
      </div>

      <Lightbox
        isOpen={lightboxOpen}
        images={featuredImages}
        currentIndex={currentIndex}
        onClose={() => setLightboxOpen(false)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </section>
  );
}

export default GallerySection;