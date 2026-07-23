import { motion } from "framer-motion";
import SectionHeading from "../common/SectionHeading";
import BubbleBackground from "../common/BubbleBackground";
import { filteringProcessData } from "../../data/filteringProcess";
import { getIcon } from "../../utils/iconMapper";

function FilteringProcessSection() {
  return (
    <section className="relative section-padding bg-gray-50 dark:bg-gray-800/50 overflow-hidden">
      <BubbleBackground count={22} color="0,153,229" />
      <div className="container-custom relative z-10">
        <SectionHeading
          badge="Proses Kami"
          title="Tahapan Penyaringan Air Berkualitas"
          subtitle="Setiap tetes air yang kami distribusikan melalui 6 tahapan proses yang ketat untuk memastikan kualitas dan keamanannya."
        />

        <div className="relative">
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gray-200 dark:bg-gray-700"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6">
            {filteringProcessData.map((process, index) => {
              const IconComponent = getIcon(process.icon);

              return (
                <motion.div
                  key={process.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex flex-col items-center text-center"
                >
                  <div className="relative z-10 w-20 h-20 rounded-full bg-white dark:bg-gray-800 border-4 border-primary/20 flex items-center justify-center mb-5 shadow-md">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <IconComponent className="text-white text-xl" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-accent text-white text-xs font-bold flex items-center justify-center shadow-md">
                      {process.step}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
                    {process.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-xs">
                    {process.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FilteringProcessSection;