import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaChevronRight, FaHome } from "react-icons/fa";

function PageHeader({ title, breadcrumb }) {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-secondary-dark to-gray-900 pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-heading font-bold text-white mb-4"
        >
          {title}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center justify-center gap-2 text-sm text-gray-300"
        >
          <Link
            to="/"
            className="flex items-center gap-1.5 hover:text-primary-light transition-colors duration-300"
          >
            <FaHome size={12} />
            Beranda
          </Link>
          <FaChevronRight size={10} />
          <span className="text-primary-light">{breadcrumb}</span>
        </motion.div>
      </div>
    </section>
  );
}

export default PageHeader;