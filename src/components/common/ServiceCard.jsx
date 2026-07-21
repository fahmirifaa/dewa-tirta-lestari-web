import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { getIcon } from "../../utils/iconMapper";

function ServiceCard({ service, index = 0 }) {
  const IconComponent = getIcon(service.icon);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 5) * 0.08 }}
      whileHover={{ y: -6 }}
      className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-xl border border-gray-100 dark:border-gray-700 transition-all duration-300 overflow-hidden"
    >
      <div className="absolute -right-6 -top-6 w-24 h-24 bg-primary/5 dark:bg-primary/10 rounded-full group-hover:scale-150 transition-transform duration-500"></div>

      <div className="relative z-10">
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-5 shadow-md">
          <IconComponent className="text-white text-2xl" />
        </div>

        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          {service.title}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
          {service.shortDescription}
        </p>

        <Link
          to="/layanan"
          className="inline-flex items-center gap-2 text-primary text-sm font-semibold group-hover:gap-3 transition-all duration-300"
        >
          Selengkapnya
          <FaArrowRight size={12} />
        </Link>
      </div>
    </motion.div>
  );
}

export default ServiceCard;