import { motion, AnimatePresence } from "framer-motion";
import { FaTint } from "react-icons/fa";

function LoadingScreen({ isLoading }) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] bg-white dark:bg-gray-900 flex flex-col items-center justify-center"
        >
          <motion.div
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
            className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg mb-4"
          >
            <FaTint className="text-white text-3xl" />
          </motion.div>
          <p className="font-heading font-semibold text-gray-700 dark:text-gray-200 tracking-wide">
            TIRTA KENCANA ABADI
          </p>
          <div className="mt-4 w-40 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-primary"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default LoadingScreen;