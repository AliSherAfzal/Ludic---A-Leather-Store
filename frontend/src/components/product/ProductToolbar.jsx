const ProductToolbar = ({
  searchTerm,
  onSearchChange,
  sortOption,
  onSortChange,
}) => {
  return (
    <section className="flex flex-col gap-4 rounded-2xl bg-[var(--surface)] p-5 md:flex-row md:items-center md:justify-between">

      <input
        type="text"
        value={searchTerm}
        placeholder="Search shoes..."
        onChange={(e) => onSearchChange(e.target.value)}
        className="flex-1 rounded-xl border border-[var(--border)] bg-[var(--bg-primary)] px-4 py-3 outline-none"
      />

      <select
        value={sortOption}
        onChange={(e) => onSortChange(e.target.value)}
       className="rounded-xl border border-[var(--border)] bg-[var(--bg-primary)] px-4 py-3 text-[var(--text-primary)] outline-none transition-colors duration-300 focus:border-[var(--accent)]"
      >
        <option value="featured">
          Featured
        </option>

        <option value="price-low">
          Price: Low → High
        </option>

        <option value="price-high">
          Price: High → Low
        </option>

        <option value="rating">
          Highest Rated
        </option>

      </select>

    </section>
  );
};

export default ProductToolbar;