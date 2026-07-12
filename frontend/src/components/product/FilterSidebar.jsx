const categories = [
  "All",
  "Men",
  "Formal",
  "Casual",
];

const FilterSidebar = ({
  selectedCategory,
  onCategoryChange,
}) => {
  return (
    <aside className="rounded-2xl bg-[var(--surface)] p-6">

      <h2 className="mb-6 text-xl font-semibold">
        Categories
      </h2>

      <div className="space-y-3">

        {categories.map((category) => (

          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`block w-full rounded-xl px-4 py-3 text-left transition-all duration-300 ${
              selectedCategory === category
                ? "bg-[var(--accent)] text-[var(--bg-primary)]"
                : "hover:bg-[var(--bg-secondary)]"
            }`}
          >
            {category}
          </button>

        ))}

      </div>

    </aside>
  );
};

export default FilterSidebar;