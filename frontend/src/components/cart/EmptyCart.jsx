import { ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-6 py-14 text-center sm:px-10 sm:py-20">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[var(--accent)] text-[var(--bg-primary)]">
        <ShoppingBag size={24} />
      </div>

      <p className="mt-6 text-sm uppercase tracking-widest text-[var(--accent)]">
        Your Selection Awaits
      </p>

      <h2 className="mt-3 text-3xl font-semibold">Your cart is empty.</h2>

      <p className="mx-auto mt-3 max-w-md text-[var(--text-secondary)]">
        Discover handcrafted footwear designed for your next well-made step.
      </p>

      <Link
        to="/products"
        className="mt-8 inline-flex rounded-xl bg-[var(--accent)] px-8 py-3 font-medium text-[var(--bg-primary)] transition-colors duration-300 hover:bg-[var(--accent-hover)]"
      >
        Continue Shopping
      </Link>
    </section>
  );
};

export default EmptyCart;
