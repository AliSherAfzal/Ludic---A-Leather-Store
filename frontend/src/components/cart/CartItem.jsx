import { Minus, Plus, Trash2 } from "lucide-react";

import { useCart } from "../../context/CartContext";

const CartItem = ({ item, formatCurrency }) => {
  const { removeFromCart, updateQuantity } = useCart();
  const itemSubtotal = item.price * item.quantity;

  return (
    <article className="grid gap-5 border-b border-[var(--border)] py-6 first:pt-0 last:border-b-0 last:pb-0 sm:grid-cols-[128px_minmax(0,1fr)_auto] sm:items-start">
      <img
        src={item.image}
        alt={item.name}
        className="aspect-square w-full rounded-xl object-cover sm:w-32"
      />

      <div className="min-w-0">
        <p className="text-sm uppercase tracking-widest text-[var(--text-secondary)]">
          {item.category}
        </p>

        <h3 className="mt-2 text-xl font-semibold">{item.name}</h3>

        <p className="mt-3 text-lg font-semibold text-[var(--accent)]">
          {formatCurrency(item.price)}
        </p>

        <div className="mt-5 flex items-center gap-4">
          <div className="flex h-10 items-center rounded-lg border border-[var(--border)]">
            <button
              type="button"
              className="flex h-full w-10 items-center justify-center text-[var(--text-secondary)] transition-colors duration-300 hover:text-[var(--accent)]"
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              aria-label={`Decrease quantity of ${item.name}`}
            >
              <Minus size={16} />
            </button>

            <span className="flex w-10 justify-center font-medium" aria-label={`Quantity: ${item.quantity}`}>
              {item.quantity}
            </span>

            <button
              type="button"
              className="flex h-full w-10 items-center justify-center text-[var(--text-secondary)] transition-colors duration-300 hover:text-[var(--accent)]"
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              aria-label={`Increase quantity of ${item.name}`}
            >
              <Plus size={16} />
            </button>
          </div>

          <button
            type="button"
            className="inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] transition-colors duration-300 hover:text-[var(--error)]"
            onClick={() => removeFromCart(item.id)}
            aria-label={`Remove ${item.name} from cart`}
          >
            <Trash2 size={16} />
            Remove
          </button>
        </div>
      </div>

      <div className="sm:text-right">
        <p className="text-sm text-[var(--text-secondary)]">Item subtotal</p>
        <p className="mt-1 text-xl font-semibold">{formatCurrency(itemSubtotal)}</p>
      </div>
    </article>
  );
};

export default CartItem;
