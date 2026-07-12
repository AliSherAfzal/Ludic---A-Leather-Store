import Button from "../ui/Button";

const summaryRows = ["Subtotal", "Shipping", "Total"];

const OrderSummary = () => {
  return (
    <aside className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8">
      <h2 className="text-2xl font-semibold">Order Summary</h2>

      <dl className="mt-6 space-y-4">
        {summaryRows.map((label) => (
          <div key={label} className="flex items-center justify-between gap-4">
            <dt className={label === "Total" ? "font-semibold" : "text-[var(--text-secondary)]"}>
              {label}
            </dt>
            <dd className={label === "Total" ? "font-semibold" : "text-[var(--text-secondary)]"}>
              --
            </dd>
          </div>
        ))}
      </dl>

      <div className="mt-6 border-t border-[var(--border)] pt-6">
        <Button>Checkout</Button>
      </div>
    </aside>
  );
};

export default OrderSummary;
