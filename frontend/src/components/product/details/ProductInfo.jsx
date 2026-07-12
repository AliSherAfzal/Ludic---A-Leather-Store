import { ShoppingBag, Star } from "lucide-react";

import Badge from "../../ui/Badge";
import Button from "../../ui/Button";
import { useCart } from "../../../context/CartContext";
import QuantitySelector from "./QuantitySelector";
import SizeSelector from "./SizeSelector";

const ProductInfo = ({ product, description, stock }) => {
  const { addToCart } = useCart();

  return (
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8">
      <div className="flex flex-wrap items-center gap-3">
        <Badge>{product.badge}</Badge>

        <span className="text-sm uppercase tracking-widest text-[var(--text-secondary)]">
          {product.category}
        </span>
      </div>

      <h1 className="mt-5 text-4xl font-bold sm:text-5xl">
        {product.name}
      </h1>

      <div className="mt-4 flex flex-wrap items-center gap-4">
        <p className="inline-flex items-center gap-2 text-[var(--accent)]">
          <Star size={18} fill="currentColor" />
          {product.rating}
        </p>

        <span className="h-1 w-1 rounded-full bg-[var(--border)]" aria-hidden="true" />

        <p className={stock > 0 ? "text-[var(--success)]" : "text-[var(--error)]"}>
          {stock > 0 ? `${stock} in stock` : "Out of stock"}
        </p>
      </div>

      <p className="mt-6 text-4xl font-bold text-[var(--accent)]">
        ${product.price}
      </p>

      <p className="mt-5 max-w-2xl leading-7 text-[var(--text-secondary)]">
        {description}
      </p>

      <div className="mt-8 space-y-6">
        <SizeSelector />
        <QuantitySelector />
      </div>

      <div className="mt-8">
        <Button onClick={() => addToCart(product)}>
          <span className="inline-flex items-center gap-2">
            <ShoppingBag size={18} />
            Add to Cart
          </span>
        </Button>
      </div>
    </div>
  );
};

export default ProductInfo;
