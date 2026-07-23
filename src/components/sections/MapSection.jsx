import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";
import { companyInfo } from "../../data/companyInfo";
import BubbleBackground from "../common/BubbleBackground";

function MapSection() {
  return (
    <section className="relative overflow-hidden section-padding bg-gray-50 dark:bg-gray-800/50">
      <BubbleBackground count={18} color="0,153,229" />
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col justify-center"
          >
            <span className="inline-block bg-primary/10 dark:bg-primary/20 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4 self-start">
              Lokasi Kami
            </span>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Kantor Pusat Kami
            </h3>

            <div className="flex items-start gap-3 mb-4">
              <FaMapMarkerAlt className="text-primary mt-1 shrink-0" />
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {companyInfo.address}
              </p>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <FaPhoneAlt className="text-primary shrink-0" />
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {companyInfo.phone}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <FaClock className="text-primary shrink-0" />
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {companyInfo.operationalHours}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-2 rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700"
          >
            <iframe
              src={companyInfo.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "350px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi TIRTA KENCANA ABADI"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default MapSection;
