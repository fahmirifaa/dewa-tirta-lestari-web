import { motion } from "framer-motion";
import SectionHeading from "../common/SectionHeading";
import { milestonesData } from "../../data/milestones";

function MilestoneSection() {
  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-800/50">
      <div className="container-custom">
        <SectionHeading
          badge="Perjalanan Kami"
          title="Sejarah Perkembangan Perusahaan"
          subtitle="Lebih dari satu dekade berkomitmen menyediakan air bersih berkualitas untuk masyarakat."
        />

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 md:-translate-x-1/2"></div>

          <div className="flex flex-col gap-10">
            {milestonesData.map((milestone, index) => (
              <motion.div
                key={milestone.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-start gap-6 md:gap-0 ${
                  index % 2 === 0
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                }`}
              >
                <div
                  className={`hidden md:block md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-10 md:text-right" : "md:pl-10"
                  }`}
                >
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm border border-gray-100 dark:border-gray-700 inline-block">
                    <p className="text-2xl font-bold text-primary mb-1">
                      {milestone.year}
                    </p>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                <div className="absolute left-4 md:left-1/2 top-1 w-4 h-4 rounded-full bg-primary border-4 border-white dark:border-gray-900 -translate-x-1/2 shadow-md z-10"></div>

                <div className="ml-10 md:hidden bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm border border-gray-100 dark:border-gray-700 w-full">
                  <p className="text-2xl font-bold text-primary mb-1">
                    {milestone.year}
                  </p>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {milestone.description}
                  </p>
                </div>

                <div className="hidden md:block md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MilestoneSection;