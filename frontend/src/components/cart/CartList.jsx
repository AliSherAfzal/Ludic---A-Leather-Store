const CartList = () => {
  return (
    <section
      className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8"
      aria-label="Cart items"
    >
      <h2 className="text-2xl font-semibold">Items</h2>

      <p className="mt-4 text-[var(--text-secondary)]">
        Cart items coming soon...
      </p>
    </section>
  );
};

export default CartList;
