import { motion } from "framer-motion";
import { stats } from "../../data/stats";
import { useCountUp } from "../../hooks/useCountUp";
import { FaTint, FaUsers, FaTruck, FaWarehouse } from "react-icons/fa";

const statsIcons = [FaTint, FaUsers, FaWarehouse, FaTruck];

function StatBlock({ stat, index }) {
  const [ref, count] = useCountUp(stat.value, 2000);
  const IconComponent = statsIcons[index] || FaTint;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col items-center text-center px-4"
    >
      <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-4 border border-white/20">
        <IconComponent className="text-primary-light text-2xl" />
      </div>
      <p className="text-3xl md:text-4xl font-bold text-white">
        {stat.value % 1 === 0 ? Math.floor(count) : count.toFixed(1)}
        <span className="text-primary-light">{stat.suffix}</span>
      </p>
      <p className="text-sm text-gray-300 mt-2">{stat.label}</p>
    </motion.div>
  );
}

function StatsSection() {
  return (
    <section className="relative section-padding bg-gradient-to-br from-gray-900 via-secondary-dark to-gray-900 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-block bg-white/10 backdrop-blur-sm text-primary-light px-4 py-1.5 rounded-full text-sm font-semibold mb-4 border border-white/20">
            Pencapaian Kami
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Dipercaya Ribuan Pelanggan di Berbagai Wilayah
          </h2>
          <p className="text-gray-300">
            Angka-angka ini merupakan bukti komitmen kami dalam melayani
            kebutuhan air bersih masyarakat selama lebih dari satu dekade.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatBlock key={stat.id} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsSection;