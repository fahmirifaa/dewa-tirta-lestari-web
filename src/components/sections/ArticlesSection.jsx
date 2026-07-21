import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import SectionHeading from "../common/SectionHeading";
import ArticleCard from "../common/ArticleCard";
import { articlesData } from "../../data/articles";

function ArticlesSection() {
  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-800/50">
      <div className="container-custom">
        <SectionHeading
          badge="Artikel Terbaru"
          title="Wawasan Seputar Air Bersih"
          subtitle="Baca artikel dan tips seputar air bersih, kesehatan, dan edukasi lingkungan dari tim kami."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {articlesData.map((article, index) => (
            <ArticleCard key={article.id} article={article} index={index} />
          ))}
        </div>

        <div className="text-center">
          <Link to="/artikel" className="btn-outline">
            Lihat Semua Artikel
            <FaArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ArticlesSection;