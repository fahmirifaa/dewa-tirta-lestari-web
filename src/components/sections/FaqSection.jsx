import SectionHeading from "../common/SectionHeading";
import AccordionItem from "../common/AccordionItem";
import BubbleBackground from "../common/BubbleBackground";
import { faqsData } from "../../data/faqs";

function FaqSection() {
  return (
    <section className="relative overflow-hidden section-padding bg-white dark:bg-gray-900">
      <BubbleBackground count={18} color="0,153,229" />
      <div className="container-custom max-w-3xl relative z-10">
        <SectionHeading
          badge="FAQ"
          title="Pertanyaan yang Sering Diajukan"
          subtitle="Temukan jawaban atas pertanyaan umum seputar layanan TIRTA KENCANA ABADI."
        />

        <div className="flex flex-col gap-4">
          {faqsData.map((faq, index) => (
            <AccordionItem
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
              isOpenByDefault={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FaqSection;