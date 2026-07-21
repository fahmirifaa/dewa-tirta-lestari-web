import { motion } from "framer-motion";
import PageHeader from "../components/common/PageHeader";
import CTABanner from "../components/common/CTABanner";
import { servicesData } from "../data/services";
import { getIcon } from "../utils/iconMapper";
import { FaWhatsapp } from "react-icons/fa";
import { companyInfo } from "../data/companyInfo";

function ServiceDetailCard({ service, index }) {
  const IconComponent = getIcon(service.icon);
  const message = encodeURIComponent(
    `Halo DEWA TIRTA LESTARI, saya ingin bertanya tentang layanan ${service.title}.`
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
      id={service.slug}
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 dark:border-gray-700 scroll-mt-28"
    >
      <div className="flex flex-col md:flex-row md:items-start gap-6">
        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shrink-0 shadow-md">
          <IconComponent className="text-white text-3xl" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
            {service.title}
          </h3>
          <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-5">
            {service.fullDescription}
          </p>
          
            <a href={`https://wa.me/${companyInfo.whatsapp}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all duration-300"
          >
            <FaWhatsapp size={16} />
            Tanya Layanan Ini
          </a>
        </div>
      </div>
    </motion.div>
  );
}

function Services() {
  return (
    <div>
      <PageHeader title="Layanan Kami" breadcrumb="Layanan" />

      <section className="section-padding bg-gray-50 dark:bg-gray-800/50">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="section-title">
              Solusi Lengkap Kebutuhan Air Bersih Anda
            </h2>
            <p className="section-subtitle">
              DEWA TIRTA LESTARI menyediakan 10 kategori layanan yang dapat
              disesuaikan dengan kebutuhan spesifik rumah tangga, industri,
              maupun institusi Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {servicesData.map((service, index) => (
              <ServiceDetailCard
                key={service.id}
                service={service}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Tidak Menemukan Layanan yang Anda Cari?"
        subtitle="Tim kami siap membantu menyesuaikan kebutuhan air bersih spesifik Anda. Hubungi kami untuk konsultasi gratis."
      />
    </div>
  );
}

export default Services;