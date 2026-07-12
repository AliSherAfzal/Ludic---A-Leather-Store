import CartItem from "./CartItem";

const CartList = ({ cartItems, formatCurrency }) => {
  return (
    <section
      className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8"
      aria-label="Cart items"
    >
      <h2 className="text-2xl font-semibold">Items</h2>

      <div className="mt-6">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} formatCurrency={formatCurrency} />
        ))}
      </div>
    </section>
  );
};

export default CartList;
