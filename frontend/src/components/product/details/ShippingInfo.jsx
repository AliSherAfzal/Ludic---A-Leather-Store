import { RefreshCw, ShieldCheck, Truck } from "lucide-react";

const shippingItems = [
  {
    icon: Truck,
    title: "Complimentary Shipping",
    text: "Free delivery on premium footwear orders.",
  },
  {
    icon: RefreshCw,
    title: "Easy Exchanges",
    text: "Exchange unworn pairs within 14 days.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Checked",
    text: "Every pair is inspected before dispatch.",
  },
];

const ShippingInfo = () => {
  return (
    <section className="mt-6 grid gap-4 md:grid-cols-3">
      {shippingItems.map((item) => {
        const Icon = item.icon;

        return (
          <article
            key={item.title}
            className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--accent)] text-[var(--bg-primary)]">
              <Icon size={20} />
            </div>

            <h2 className="mt-4 text-lg font-semibold">
              {item.title}
            </h2>

            <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
              {item.text}
            </p>
          </article>
        );
      })}
    </section>
  );
};

export default ShippingInfo;
