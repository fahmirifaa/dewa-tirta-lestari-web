import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { companyInfo } from "../../data/companyInfo";

function FloatingWhatsApp() {
  const message = encodeURIComponent(
    "Halo DEWA TIRTA LESTARI, saya ingin bertanya tentang layanan supplier air bersih."
  );

  return (
    <motion.a
      href={`https://wa.me/${companyInfo.whatsapp}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hubungi kami via WhatsApp"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center shadow-lg"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-40"></span>
      <FaWhatsapp className="text-white text-3xl relative z-10" />
    </motion.a>
  );
}

export default FloatingWhatsApp;