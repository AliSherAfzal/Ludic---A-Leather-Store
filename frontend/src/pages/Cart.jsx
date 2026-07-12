import { Link } from "react-router-dom";

import CartList from "../components/cart/CartList";
import EmptyCart from "../components/cart/EmptyCart";
import OrderSummary from "../components/cart/OrderSummary";
import { useCart } from "../context/CartContext";

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 2,
});

const formatCurrency = (amount) => currencyFormatter.format(amount);

const Cart = () => {
  const { cartItems, totalItems } = useCart();
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <nav className="mb-8 text-sm text-[var(--text-secondary)]" aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link to="/" className="transition-colors duration-300 hover:text-[var(--accent)]">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-[var(--text-primary)]" aria-current="page">
            Shopping Cart
          </li>
        </ol>
      </nav>

      <header className="mb-10">
        <h1 className="text-4xl font-bold">Shopping Cart</h1>
      </header>

      {cartItems.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
          <CartList cartItems={cartItems} formatCurrency={formatCurrency} />
          <OrderSummary
            subtotal={subtotal}
            totalItems={totalItems}
            formatCurrency={formatCurrency}
          />
        </div>
      )}
    </section>
  );
};

export default Cart;
