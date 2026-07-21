import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import SectionHeading from "../common/SectionHeading";
import ServiceCard from "../common/ServiceCard";
import { servicesData } from "../../data/services";

function ServicesSection() {
  const featuredServices = servicesData.slice(0, 6);

  return (
    <section className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <SectionHeading
          badge="Layanan Kami"
          title="Solusi Air Bersih untuk Setiap Kebutuhan"
          subtitle="Dari rumah tangga hingga industri, kami menyediakan berbagai layanan supplier air bersih yang dapat disesuaikan dengan kebutuhan spesifik Anda."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {featuredServices.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        <div className="text-center">
          <Link to="/layanan" className="btn-outline">
            Lihat Semua Layanan
            <FaArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;