import { motion } from "framer-motion";
import { getIcon } from "../../utils/iconMapper";

function FeatureCard({ icon, title, description, index = 0 }) {
  const IconComponent = getIcon(icon);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-xl border border-gray-100 dark:border-gray-700 transition-all duration-300"
    >
      <div className="w-14 h-14 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
        <IconComponent className="text-primary group-hover:text-white text-2xl transition-colors duration-300" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}

export default FeatureCard;