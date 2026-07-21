import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa";
import SectionHeading from "../common/SectionHeading";
import StarRating from "../common/StarRating";
import { testimonialsData } from "../../data/testimonials";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function TestimonialsSection() {
  return (
    <section className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <SectionHeading
          badge="Testimoni"
          title="Apa Kata Pelanggan Kami"
          subtitle="Kepuasan pelanggan adalah prioritas utama kami. Berikut pengalaman mereka menggunakan layanan DEWA TIRTA LESTARI."
        />

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="testimonial-swiper pb-14"
        >
          {testimonialsData.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 h-full flex flex-col border border-gray-100 dark:border-gray-700">
                <FaQuoteLeft className="text-primary/30 text-3xl mb-4" />
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-6 flex-1">
                  {testimonial.message}
                </p>
                <div className="flex items-center gap-3 mt-auto">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {testimonial.role}
                    </p>
                    <StarRating rating={testimonial.rating} size={12} />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default TestimonialsSection;