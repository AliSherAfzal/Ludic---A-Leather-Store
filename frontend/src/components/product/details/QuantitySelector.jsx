import { Minus, Plus } from "lucide-react";
import { useState } from "react";

const QuantitySelector = () => {
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    setQuantity((currentQuantity) => Math.max(1, currentQuantity - 1));
  };

  const increaseQuantity = () => {
    setQuantity((currentQuantity) => Math.min(10, currentQuantity + 1));
  };

  return (
    <div>
      <h2 className="text-sm font-semibold uppercase tracking-widest">
        Quantity
      </h2>

      <div className="mt-3 inline-grid h-12 grid-cols-[48px_64px_48px] overflow-hidden rounded-xl border border-[var(--border)]">
        <button
          type="button"
          onClick={decreaseQuantity}
          className="flex items-center justify-center transition-colors duration-300 hover:bg-[var(--bg-secondary)]"
          aria-label="Decrease quantity"
        >
          <Minus size={16} />
        </button>

        <span className="flex items-center justify-center border-x border-[var(--border)] font-semibold">
          {quantity}
        </span>

        <button
          type="button"
          onClick={increaseQuantity}
          className="flex items-center justify-center transition-colors duration-300 hover:bg-[var(--bg-secondary)]"
          aria-label="Increase quantity"
        >
          <Plus size={16} />
        </button>
      </div>
    </div>
  );
};

export default QuantitySelector;
