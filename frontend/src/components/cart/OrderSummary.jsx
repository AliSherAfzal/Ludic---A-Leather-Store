import { Link } from "react-router-dom";

const OrderSummary = ({ subtotal, totalItems, formatCurrency }) => {
  return (
    <aside className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8">
      <h2 className="text-2xl font-semibold">Order Summary</h2>

      <dl className="mt-6 space-y-4">
        <div className="flex items-center justify-between gap-4">
          <dt className="text-[var(--text-secondary)]">Total Items</dt>
          <dd>{totalItems}</dd>
        </div>

        <div className="flex items-center justify-between gap-4">
          <dt className="text-[var(--text-secondary)]">Subtotal</dt>
          <dd>{formatCurrency(subtotal)}</dd>
        </div>

        <div className="flex items-center justify-between gap-4 border-t border-[var(--border)] pt-4 text-lg font-semibold">
          <dt>Estimated Total</dt>
          <dd>{formatCurrency(subtotal)}</dd>
        </div>
      </dl>

      <div className="mt-8 grid gap-3">
        <Link
          to="/products"
          className="rounded-xl border border-[var(--accent)] px-6 py-3 text-center font-medium text-[var(--accent)] transition-colors duration-300 hover:bg-[var(--accent)] hover:text-[var(--bg-primary)]"
        >
          Continue Shopping
        </Link>

        <button
          type="button"
          className="rounded-xl bg-[var(--accent)] px-6 py-3 font-medium text-[var(--bg-primary)] transition-colors duration-300 hover:bg-[var(--accent-hover)]"
        >
          Proceed to Checkout
        </button>
      </div>
    </aside>
  );
};

export default OrderSummary;
