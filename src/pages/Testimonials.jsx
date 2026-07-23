import PageHeader from "../components/common/PageHeader";
import CTABanner from "../components/common/CTABanner";
import TestimonialCard from "../components/common/TestimonialCard";
import { testimonialsData } from "../data/testimonials";

function Testimonials() {
  const averageRating = (
    testimonialsData.reduce((sum, t) => sum + t.rating, 0) /
    testimonialsData.length
  ).toFixed(1);

  return (
    <div>
      <PageHeader title="Testimoni Pelanggan" breadcrumb="Testimoni" />

      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-4">
            <h2 className="section-title">Apa Kata Pelanggan Kami</h2>
            <p className="section-subtitle mb-6">
              Kepuasan pelanggan adalah prioritas utama kami. Berikut
              pengalaman nyata mereka menggunakan layanan TIRTA KENCANA
              ABADI.
            </p>
            <div className="inline-flex items-center gap-3 bg-primary/10 dark:bg-primary/20 px-6 py-3 rounded-full mb-8">
              <span className="text-3xl font-bold text-primary">
                {averageRating}
              </span>
              <div className="text-left">
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  dari {testimonialsData.length}+ ulasan pelanggan
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonialsData.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Sudah Menjadi Pelanggan Kami?"
        subtitle="Bagikan pengalaman Anda menggunakan layanan TIRTA KENCANA ABADI melalui WhatsApp."
      />
    </div>
  );
}

export default Testimonials;