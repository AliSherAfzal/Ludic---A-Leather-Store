import { useState } from "react";

const sizes = ["7", "8", "9", "10", "11", "12"];

const SizeSelector = () => {
  const [selectedSize, setSelectedSize] = useState(sizes[2]);

  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-sm font-semibold uppercase tracking-widest">
          Size
        </h2>

        <span className="text-sm text-[var(--text-secondary)]">
          US sizing
        </span>
      </div>

      <div className="mt-3 grid grid-cols-3 gap-3 sm:grid-cols-6">
        {sizes.map((size) => {
          const isSelected = size === selectedSize;

          return (
            <button
              key={size}
              type="button"
              onClick={() => setSelectedSize(size)}
              className={`h-12 rounded-xl border text-sm font-semibold transition-all duration-300 ${
                isSelected
                  ? "border-[var(--accent)] bg-[var(--accent)] text-[var(--bg-primary)]"
                  : "border-[var(--border)] hover:border-[var(--accent)]"
              }`}
              aria-pressed={isSelected}
            >
              {size}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SizeSelector;
