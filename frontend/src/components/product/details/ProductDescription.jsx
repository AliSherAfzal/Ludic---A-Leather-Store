const ProductDescription = ({ description }) => {
  return (
    <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8">
      <p className="text-sm uppercase tracking-widest text-[var(--accent)]">
        Details
      </p>

      <h2 className="mt-3 text-2xl font-semibold">
        Product Description
      </h2>

      <p className="mt-4 leading-8 text-[var(--text-secondary)]">
        {description}
      </p>

      <p className="mt-4 leading-8 text-[var(--text-secondary)]">
        Each pair is finished with a clean leather profile, balanced structure,
        and a comfort-focused fit for premium daily wear.
      </p>
    </section>
  );
};

export default ProductDescription;
