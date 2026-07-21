import { motion } from "framer-motion";

function SectionHeading({ badge, title, subtitle, align = "center" }) {
  const alignment =
    align === "center" ? "text-center items-center mx-auto" : "text-left items-start";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col ${alignment} max-w-2xl mb-12`}
    >
      {badge && (
        <span className="inline-block bg-primary/10 dark:bg-primary/20 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
          {badge}
        </span>
      )}
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle mb-0">{subtitle}</p>}
    </motion.div>
  );
}

export default SectionHeading;