import { useParams, Link } from "react-router-dom";
import { FaCalendarAlt, FaUser, FaArrowLeft, FaWhatsapp } from "react-icons/fa";
import PageHeader from "../components/common/PageHeader";
import CTABanner from "../components/common/CTABanner";
import ArticleCard from "../components/common/ArticleCard";
import { articlesData } from "../data/articles";
import { companyInfo } from "../data/companyInfo";

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function ArticleDetail() {
  const { slug } = useParams();
  const article = articlesData.find((item) => item.slug === slug);

  const otherArticles = articlesData
    .filter((item) => item.slug !== slug)
    .slice(0, 3);

  if (!article) {
    return (
      <div className="pt-32 pb-20 container-custom text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Artikel Tidak Ditemukan
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mb-6">
          Artikel yang Anda cari mungkin telah dihapus atau tidak tersedia.
        </p>
        <Link to="/artikel" className="btn-primary">
          Kembali ke Artikel
        </Link>
      </div>
    );
  }

  const shareMessage = encodeURIComponent(
    `Baca artikel menarik: ${article.title} - ${window.location.href}`
  );

  return (
    <div>
      <PageHeader title={article.title} breadcrumb="Artikel" />

      <article className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom max-w-3xl">
          <Link
            to="/artikel"
            className="inline-flex items-center gap-2 text-primary text-sm font-semibold mb-8 hover:gap-3 transition-all duration-300"
          >
            <FaArrowLeft size={12} />
            Kembali ke Semua Artikel
          </Link>

          <div className="flex flex-wrap items-center gap-5 mb-6 text-sm text-gray-500 dark:text-gray-400">
            <span className="bg-primary/10 dark:bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-semibold">
              {article.category}
            </span>
            <div className="flex items-center gap-2">
              <FaCalendarAlt size={12} />
              {formatDate(article.date)}
            </div>
            <div className="flex items-center gap-2">
              <FaUser size={12} />
              {article.author}
            </div>
          </div>

          <img
            src={article.image}
            alt={article.title}
            className="w-full h-64 md:h-96 object-cover rounded-2xl mb-8"
          />

          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base">
              {article.content}
            </p>
          </div>

          <div className="mt-10 pt-6 border-t border-gray-100 dark:border-gray-700 flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Bagikan artikel ini:
            </p>
            
              <a href={`https://wa.me/?text=${shareMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors duration-300"
            >
              <FaWhatsapp size={16} />
              Bagikan via WhatsApp
            </a>
          </div>
        </div>
      </article>

      {otherArticles.length > 0 && (
        <section className="section-padding bg-gray-50 dark:bg-gray-800/50">
          <div className="container-custom">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Artikel Lainnya
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherArticles.map((item, index) => (
                <ArticleCard key={item.id} article={item} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner />
    </div>
  );
}

export default ArticleDetail;