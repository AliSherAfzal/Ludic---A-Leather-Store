import ProductCard from "../ProductCard";

const RelatedProducts = ({ product, products }) => {
  const relatedProducts = products
    .filter((item) => item.category === product.category && item.id !== product.id)
    .slice(0, 3);

  if (relatedProducts.length === 0) {
    return null;
  }

  return (
    <section className="mt-16">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-widest text-[var(--accent)]">
            Curated Pairings
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Related Products
          </h2>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {relatedProducts.map((relatedProduct) => (
          <ProductCard key={relatedProduct.id} product={relatedProduct} />
        ))}
      </div>
    </section>
  );
};

export default RelatedProducts;
