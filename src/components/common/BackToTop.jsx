import { AnimatePresence, motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";
import { useScrollPosition } from "../../hooks/useScrollPosition";

function BackToTop() {
  const isVisible = useScrollPosition(400);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          aria-label="Kembali ke atas"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-24 right-6 z-40 w-11 h-11 rounded-full bg-primary hover:bg-primary-dark text-white flex items-center justify-center shadow-lg transition-colors duration-300"
        >
          <FaArrowUp size={16} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default BackToTop;