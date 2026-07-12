import { Link } from "react-router-dom";

import Badge from "../ui/Badge";

const ProductCard = ({ product }) => {
  return (
    <article className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)]">

      <div className="relative">

        <img
          src={product.image}
          alt={product.name}
          className="h-72 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        <div className="absolute left-4 top-4">
          <Badge>{product.badge}</Badge>
        </div>

      </div>

      <div className="space-y-3 p-6">

        <p className="text-sm uppercase tracking-widest text-[var(--text-secondary)]">
          {product.category}
        </p>

        <h3 className="text-2xl font-semibold">
          {product.name}
        </h3>

        <p className="text-sm text-[var(--accent)]">
          ★ {product.rating}
        </p>

        <p className="text-2xl font-bold">
          ${product.price}
        </p>

        <Link
          to={`/products/${product.id}`}
          className="mt-4 block w-full rounded-xl border border-[var(--accent)] py-3 text-center transition-colors duration-300 hover:bg-[var(--accent)] hover:text-[var(--bg-primary)]"
        >
          View Details
        </Link>

      </div>

    </article>
  );
};

export default ProductCard;