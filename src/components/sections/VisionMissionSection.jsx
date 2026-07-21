import { motion } from "framer-motion";
import { FaBullseye, FaCheckCircle, FaEye } from "react-icons/fa";
import { visionData, missionData } from "../../data/visionMission";

function VisionMissionSection() {
  return (
    <section className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 text-white"
          >
            <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-5">
              <FaEye className="text-2xl" />
            </div>
            <h3 className="text-xl font-bold mb-4">Visi Kami</h3>
            <p className="text-white/90 leading-relaxed">{visionData}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-gray-100 dark:border-gray-700"
          >
            <div className="w-14 h-14 rounded-xl bg-accent/10 dark:bg-accent/20 flex items-center justify-center mb-5">
              <FaBullseye className="text-accent text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Misi Kami
            </h3>
            <ul className="flex flex-col gap-3">
              {missionData.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <FaCheckCircle className="text-accent mt-1 shrink-0" size={14} />
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default VisionMissionSection;