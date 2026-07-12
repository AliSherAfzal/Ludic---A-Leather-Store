const ProductToolbar = () => {
  return (
    <section className="flex flex-col gap-4 rounded-2xl bg-[var(--surface)] p-5 md:flex-row md:items-center md:justify-between">

      <input
        type="text"
        placeholder="Search shoes..."
        className="rounded-xl border border-[var(--border)] bg-[var(--bg-primary)] px-4 py-3 outline-none"
      />

      <select className="rounded-xl border border-[var(--border)] bg-[var(--bg-primary)] px-4 py-3">

        <option>Featured</option>

        <option>Price: Low to High</option>

        <option>Price: High to Low</option>

      </select>

    </section>
  );
};

export default ProductToolbar;