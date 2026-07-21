import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Lightbox({ isOpen, images, currentIndex, onClose, onNext, onPrev }) {
  if (!images || images.length === 0) return null;

  const currentImage = images[currentIndex];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <button
            onClick={onClose}
            aria-label="Tutup"
            className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors duration-300"
          >
            <FaTimes size={20} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            aria-label="Sebelumnya"
            className="absolute left-4 md:left-8 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors duration-300"
          >
            <FaChevronLeft size={18} />
          </button>

          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="max-w-4xl max-h-[80vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentImage.image}
              alt={currentImage.caption}
              className="max-w-full max-h-[70vh] object-contain rounded-lg"
            />
            <p className="text-gray-300 text-sm mt-4 text-center">
              {currentImage.caption}
            </p>
          </motion.div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            aria-label="Selanjutnya"
            className="absolute right-4 md:right-8 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors duration-300"
          >
            <FaChevronRight size={18} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Lightbox;