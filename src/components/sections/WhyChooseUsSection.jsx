import SectionHeading from "../common/SectionHeading";
import FeatureCard from "../common/FeatureCard";
import BubbleBackground from "../common/BubbleBackground";
import { whyChooseUsData } from "../../data/whyChooseUs";

function WhyChooseUsSection() {
  return (
    <section className="relative overflow-hidden section-padding bg-gray-50 dark:bg-gray-800/50">
      <BubbleBackground count={22} color="0,153,229" />
      <div className="container-custom relative z-10">
        <SectionHeading
          badge="Mengapa Memilih Kami"
          title="Alasan Ribuan Pelanggan Mempercayai Kami"
          subtitle="Kami berkomitmen memberikan pelayanan terbaik dengan standar kualitas tinggi, harga transparan, dan armada yang siap menjangkau kebutuhan Anda."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUsData.map((item, index) => (
            <FeatureCard
              key={item.id}
              icon={item.icon}
              title={item.title}
              description={item.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUsSection;