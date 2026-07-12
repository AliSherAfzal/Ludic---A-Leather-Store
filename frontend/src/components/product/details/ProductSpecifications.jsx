const ProductSpecifications = ({ specifications }) => {
  return (
    <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8">
      <p className="text-sm uppercase tracking-widest text-[var(--accent)]">
        Craft
      </p>

      <h2 className="mt-3 text-2xl font-semibold">
        Specifications
      </h2>

      <dl className="mt-5 divide-y divide-[var(--border)]">
        {specifications.map((specification) => (
          <div
            key={specification.label}
            className="grid gap-2 py-4 sm:grid-cols-[140px_1fr]"
          >
            <dt className="text-sm uppercase tracking-widest text-[var(--text-secondary)]">
              {specification.label}
            </dt>

            <dd className="font-medium">
              {specification.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
};

export default ProductSpecifications;
