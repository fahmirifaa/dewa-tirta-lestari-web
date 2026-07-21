import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus } from "react-icons/fa";

function AccordionItem({ question, answer, isOpenByDefault = false }) {
  const [isOpen, setIsOpen] = useState(isOpenByDefault);

  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden bg-white dark:bg-gray-800">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="font-medium text-gray-900 dark:text-white">
          {question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0 w-8 h-8 rounded-full bg-primary/10 dark:bg-primary/20 text-primary flex items-center justify-center"
        >
          <FaPlus size={12} />
        </motion.span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default AccordionItem;