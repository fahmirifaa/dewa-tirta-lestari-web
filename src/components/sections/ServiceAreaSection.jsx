import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import SectionHeading from "../common/SectionHeading";
import ServiceAreaCard from "../common/ServiceAreaCard";
import BubbleBackground from "../common/BubbleBackground";
import { serviceAreasData } from "../../data/serviceAreas";

function ServiceAreaSection() {
  return (
    <section className="relative overflow-hidden section-padding bg-white dark:bg-gray-900">
      <BubbleBackground count={22} color="0,153,229" />
      <div className="container-custom relative z-10">
        <SectionHeading
          badge="Area Layanan"
          title="Wilayah Jangkauan Distribusi Kami"
          subtitle="Kami terus memperluas jangkauan layanan untuk memastikan air bersih dapat diakses oleh lebih banyak wilayah."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {serviceAreasData.map((area, index) => (
            <ServiceAreaCard key={area.id} area={area} index={index} />
          ))}
        </div>

        <div className="text-center">
          <Link to="/area-layanan" className="btn-outline">
            Lihat Semua Area Layanan
            <FaArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ServiceAreaSection;