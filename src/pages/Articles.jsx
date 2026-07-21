import { useState, useMemo } from "react";
import { FaSearch } from "react-icons/fa";
import PageHeader from "../components/common/PageHeader";
import CTABanner from "../components/common/CTABanner";
import ArticleCard from "../components/common/ArticleCard";
import CategoryFilter from "../components/common/CategoryFilter";
import { articlesData } from "../data/articles";

function Articles() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("Semua");

  const categories = useMemo(
    () => [...new Set(articlesData.map((item) => item.category))],
    []
  );

  const filteredArticles = useMemo(() => {
    let result = articlesData;

    if (activeCategory !== "Semua") {
      result = result.filter((article) => article.category === activeCategory);
    }

    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        (article) =>
          article.title.toLowerCase().includes(term) ||
          article.excerpt.toLowerCase().includes(term)
      );
    }

    return result;
  }, [searchTerm, activeCategory]);

  return (
    <div>
      <PageHeader title="Artikel" breadcrumb="Artikel" />

      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="section-title">Wawasan Seputar Air Bersih</h2>
            <p className="section-subtitle">
              Baca artikel dan tips seputar air bersih, kesehatan, dan
              edukasi lingkungan dari tim kami.
            </p>
          </div>

          <div className="relative max-w-xl mx-auto mb-8">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Cari artikel..."
              className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
            />
          </div>

          <CategoryFilter
            categories={categories}
            activeCategory={activeCategory}
            onSelect={setActiveCategory}
          />

          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((article, index) => (
                <ArticleCard key={article.id} article={article} index={index} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-400 py-10">
              Tidak ditemukan artikel yang sesuai.
            </p>
          )}
        </div>
      </section>

      <CTABanner />
    </div>
  );
}

export default Articles;