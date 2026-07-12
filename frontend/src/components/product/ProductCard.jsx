const ProductCard = ({ product }) => {
  return (
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">

      <h3 className="text-xl font-semibold">
        {product.name}
      </h3>

      <p className="mt-2 text-[var(--text-secondary)]">
        Product Card Coming Soon
      </p>

    </div>
  );
};

export default ProductCard;