import PageHeader from "../components/common/PageHeader";
import AboutSection from "../components/sections/AboutSection";
import VisionMissionSection from "../components/sections/VisionMissionSection";
import MilestoneSection from "../components/sections/MilestoneSection";
import WhyChooseUsSection from "../components/sections/WhyChooseUsSection";

function About() {
  return (
    <div>
      <PageHeader title="Tentang Kami" breadcrumb="Tentang Kami" />
      <AboutSection />
      <VisionMissionSection />
      <MilestoneSection />
      <WhyChooseUsSection />
    </div>
  );
}

export default About;