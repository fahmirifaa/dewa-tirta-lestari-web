import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaWhatsapp,
} from "react-icons/fa";
import PageHeader from "../components/common/PageHeader";
import MapSection from "../components/sections/MapSection";
import { companyInfo } from "../data/companyInfo";

function Contact() {
  const contactInfoItems = [
    {
      icon: FaMapMarkerAlt,
      label: "Alamat",
      value: companyInfo.address,
    },
    {
      icon: FaPhoneAlt,
      label: "Telepon",
      value: `${companyInfo.phone} / ${companyInfo.phoneSecondary}`,
    },
    {
      icon: FaEnvelope,
      label: "Email",
      value: companyInfo.email,
    },
    {
      icon: FaClock,
      label: "Jam Operasional",
      value: companyInfo.operationalHours,
    },
  ];

  return (
    <div>
      <PageHeader title="Hubungi Kami" breadcrumb="Hubungi Kami" />

      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 flex flex-col gap-5"
            >
              <div>
                <span className="inline-block bg-primary/10 dark:bg-primary/20 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                  Informasi Kontak
                </span>
                <h2 className="section-title">Kami Siap Membantu Anda</h2>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
                  Punya pertanyaan tentang layanan kami, atau ingin memesan
                  air bersih? Chat langsung dengan tim kami via WhatsApp,
                  kami akan merespons secepatnya.
                </p>
              </div>

              {contactInfoItems.map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 bg-gray-50 dark:bg-gray-800 rounded-xl p-4 border border-gray-100 dark:border-gray-700"
                >
                  <div className="w-11 h-11 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center shrink-0">
                    <item.icon className="text-primary" size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-1">{item.label}</p>
                    <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-3 bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 md:p-12 text-center flex flex-col items-center justify-center gap-6"
            >
              <div className="w-20 h-20 rounded-full bg-white/15 flex items-center justify-center">
                <FaWhatsapp className="text-white" size={40} />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  Chat Langsung via WhatsApp
                </h3>
                <p className="text-white/85 leading-relaxed max-w-md mx-auto">
                  Pesan air bersih, tanya harga, atau konsultasi kebutuhan
                  Anda langsung ke tim kami. Respons cepat, tanpa perlu
                  mengisi form.
                </p>
              </div>
              <a
                href={`https://wa.me/${companyInfo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-primary font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg text-lg"
              >
                <FaWhatsapp size={22} />
                Chat Sekarang
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <MapSection />
    </div>
  );
}

export default Contact;
