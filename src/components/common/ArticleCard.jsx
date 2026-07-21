import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaCalendarAlt, FaArrowRight } from "react-icons/fa";

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function ArticleCard({ article, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 dark:border-gray-700 transition-all duration-300"
    >
      <Link to={`/artikel/${article.slug}`}>
        <div className="relative overflow-hidden h-48">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
          />
          <span className="absolute top-4 left-4 bg-primary text-white text-xs font-semibold px-3 py-1.5 rounded-full">
            {article.category}
          </span>
        </div>
      </Link>
      <div className="p-6">
        <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
          <FaCalendarAlt size={11} />
          {formatDate(article.date)}
        </div>
        <Link to={`/artikel/${article.slug}`}>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2">
            {article.title}
          </h3>
        </Link>
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4 line-clamp-2">
          {article.excerpt}
        </p>
        <Link
          to={`/artikel/${article.slug}`}
          className="inline-flex items-center gap-2 text-primary text-sm font-semibold group-hover:gap-3 transition-all duration-300"
        >
          Baca Selengkapnya
          <FaArrowRight size={12} />
        </Link>
      </div>
    </motion.div>
  );
}

export default ArticleCard;