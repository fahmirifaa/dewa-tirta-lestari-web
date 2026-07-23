import SectionHeading from "../common/SectionHeading";
import AccordionItem from "../common/AccordionItem";
import { faqsData } from "../../data/faqs";

function FaqSection() {
  return (
    <section className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom max-w-3xl">
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