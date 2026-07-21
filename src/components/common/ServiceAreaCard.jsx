    import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaCheckCircle } from "react-icons/fa";

function ServiceAreaCard({ area, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="relative bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-100 dark:border-gray-700 hover:border-primary/40 hover:shadow-md transition-all duration-300"
    >
      {area.isPopular && (
        <span className="absolute -top-2.5 right-4 bg-accent text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm">
          Populer
        </span>
      )}
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center shrink-0">
          <FaMapMarkerAlt className="text-primary" size={16} />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
            {area.name}
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
            {area.description}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-3 pt-3 border-t border-gray-100 dark:border-gray-700">
        <FaCheckCircle className="text-accent" size={12} />
        <span className="text-xs text-gray-500 dark:text-gray-400">
          Area terjangkau layanan
        </span>
      </div>
    </motion.div>
  );
}

export default ServiceAreaCard;