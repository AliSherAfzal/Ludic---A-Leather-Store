import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 text-center sm:p-10">
      <p className="text-lg text-[var(--text-secondary)]">Your cart is empty.</p>

      <Link
        to="/products"
        className="mt-6 inline-flex rounded-xl bg-[var(--accent)] px-8 py-3 font-medium text-[var(--bg-primary)] transition-colors duration-300 hover:bg-[var(--accent-hover)]"
      >
        Continue Shopping
      </Link>
    </section>
  );
};

export default EmptyCart;
