function CategoryFilter({ categories, activeCategory, onSelect }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
      <button
        onClick={() => onSelect("Semua")}
        className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
          activeCategory === "Semua"
            ? "bg-primary text-white shadow-md"
            : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
        }`}
      >
        Semua
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            activeCategory === category
              ? "bg-primary text-white shadow-md"
              : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;