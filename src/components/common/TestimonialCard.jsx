import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import StarRating from "./StarRating";

function TestimonialCard({ testimonial, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col h-full"
    >
      <FaQuoteLeft className="text-primary/30 text-3xl mb-4" />
      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-6 flex-1">
        {testimonial.message}
      </p>
      <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover"
          loading="lazy"
        />
        <div>
          <p className="font-semibold text-gray-900 dark:text-white text-sm">
            {testimonial.name}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
            {testimonial.role}
          </p>
          <StarRating rating={testimonial.rating} size={12} />
        </div>
      </div>
    </motion.div>
  );
}

export default TestimonialCard;