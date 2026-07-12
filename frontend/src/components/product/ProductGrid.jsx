import ProductCard from "./ProductCard";

const ProductGrid = ({ products }) => {
  if (products.length === 0) {
    return (
      <div className="flex items-center justify-center rounded-2xl border border-dashed border-[var(--border)] p-20">

        <div className="text-center">

          <h2 className="text-2xl font-semibold">
            No Products Found
          </h2>

          <p className="mt-3 text-[var(--text-secondary)]">
            Try another search term.
          </p>

        </div>

      </div>
    );
  }

  return (
    <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">

      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}

    </section>
  );
};

export default ProductGrid;