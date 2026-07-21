import PageHeader from "../components/common/PageHeader";
import CTABanner from "../components/common/CTABanner";
import ServiceAreaCard from "../components/common/ServiceAreaCard";
import MapSection from "../components/sections/MapSection";
import { serviceAreasData } from "../data/serviceAreas";

function ServiceAreas() {
  return (
    <div>
      <PageHeader title="Area Layanan" breadcrumb="Area Layanan" />

      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="section-title">
              Wilayah Jangkauan Distribusi Air Bersih Kami
            </h2>
            <p className="section-subtitle">
              Kami terus memperluas jangkauan layanan untuk memastikan air
              bersih dapat diakses oleh lebih banyak wilayah di sekitar
              Tangerang dan Banten.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {serviceAreasData.map((area, index) => (
              <ServiceAreaCard key={area.id} area={area} index={index} />
            ))}
          </div>
        </div>
      </section>

      <MapSection />

      <CTABanner
        title="Wilayah Anda Belum Tercantum?"
        subtitle="Jangan ragu untuk menghubungi kami, kami akan berusaha menjangkau kebutuhan air bersih Anda."
      />
    </div>
  );
}

export default ServiceAreas;