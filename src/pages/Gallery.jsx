import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { FaSearchPlus } from "react-icons/fa";
import PageHeader from "../components/common/PageHeader";
import CTABanner from "../components/common/CTABanner";
import CategoryFilter from "../components/common/CategoryFilter";
import Lightbox from "../components/common/Lightbox";
import { galleryData } from "../data/gallery";

function Gallery() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories = useMemo(
    () => [...new Set(galleryData.map((item) => item.category))],
    []
  );

  const filteredImages = useMemo(() => {
    if (activeCategory === "Semua") return galleryData;
    return galleryData.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  function openLightbox(index) {
    setCurrentIndex(index);
    setLightboxOpen(true);
  }

  function handleNext() {
    setCurrentIndex((prev) => (prev + 1) % filteredImages.length);
  }

  function handlePrev() {
    setCurrentIndex(
      (prev) => (prev - 1 + filteredImages.length) % filteredImages.length
    );
  }

  return (
    <div>
      <PageHeader title="Galeri" breadcrumb="Galeri" />

      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="section-title">Dokumentasi Kegiatan Kami</h2>
            <p className="section-subtitle">
              Lihat lebih dekat aktivitas operasional, armada, dan fasilitas
              penyaringan air DEWA TIRTA LESTARI.
            </p>
          </div>

          <CategoryFilter
            categories={categories}
            activeCategory={activeCategory}
            onSelect={setActiveCategory}
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((item, index) => (
              <motion.button
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
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
                <span className="absolute bottom-2 left-2 right-2 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-1">
                  {item.caption}
                </span>
              </motion.button>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <p className="text-center text-gray-400 py-10">
              Belum ada foto untuk kategori ini.
            </p>
          )}
        </div>
      </section>

      <CTABanner />

      <Lightbox
        isOpen={lightboxOpen}
        images={filteredImages}
        currentIndex={currentIndex}
        onClose={() => setLightboxOpen(false)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </div>
  );
}

export default Gallery;