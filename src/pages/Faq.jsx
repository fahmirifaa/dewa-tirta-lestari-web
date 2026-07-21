import { useState, useMemo } from "react";
import { FaSearch } from "react-icons/fa";
import PageHeader from "../components/common/PageHeader";
import CTABanner from "../components/common/CTABanner";
import AccordionItem from "../components/common/AccordionItem";
import { faqsData } from "../data/faqs";

function Faq() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFaqs = useMemo(() => {
    if (!searchTerm.trim()) return faqsData;
    const term = searchTerm.toLowerCase();
    return faqsData.filter(
      (faq) =>
        faq.question.toLowerCase().includes(term) ||
        faq.answer.toLowerCase().includes(term)
    );
  }, [searchTerm]);

  return (
    <div>
      <PageHeader
        title="Pertanyaan yang Sering Diajukan"
        breadcrumb="FAQ"
      />

      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom max-w-3xl">
          <div className="relative mb-10">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Cari pertanyaan..."
              className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
            />
          </div>

          <div className="flex flex-col gap-4">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => (
                <AccordionItem
                  key={faq.id}
                  question={faq.question}
                  answer={faq.answer}
                  isOpenByDefault={index === 0 && !searchTerm}
                />
              ))
            ) : (
              <p className="text-center text-gray-400 py-10">
                Tidak ditemukan pertanyaan yang cocok dengan pencarian Anda.
              </p>
            )}
          </div>
        </div>
      </section>

      <CTABanner
        title="Masih Ada Pertanyaan Lain?"
        subtitle="Tim kami siap membantu menjawab pertanyaan Anda kapan saja."
      />
    </div>
  );
}

export default Faq;