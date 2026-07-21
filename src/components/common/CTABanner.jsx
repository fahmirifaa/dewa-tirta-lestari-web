import { motion } from "framer-motion";
import { FaWhatsapp, FaArrowRight } from "react-icons/fa";
import { companyInfo } from "../../data/companyInfo";

function CTABanner({
  title = "Butuh Air Bersih untuk Kebutuhan Anda?",
  subtitle = "Konsultasikan kebutuhan air bersih Anda dengan tim kami sekarang juga.",
}) {
  const message = encodeURIComponent(
    "Halo DEWA TIRTA LESTARI, saya ingin berkonsultasi mengenai kebutuhan air bersih saya."
  );

  return (
    <section className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-gradient-to-br from-primary via-secondary to-secondary-dark rounded-3xl p-8 md:p-12 overflow-hidden text-center"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3"></div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              {title}
            </h2>
            <p className="text-white/80 mb-8">{subtitle}</p>
            
              <a href={`https://wa.me/${companyInfo.whatsapp}?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-primary font-semibold px-8 py-3.5 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <FaWhatsapp size={18} />
              Hubungi Kami Sekarang
              <FaArrowRight size={14} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CTABanner;