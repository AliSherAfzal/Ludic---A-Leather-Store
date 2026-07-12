import ProductToolbar from "../components/product/ProductToolbar";
import FilterSidebar from "../components/product/FilterSidebar";
import ProductGrid from "../components/product/ProductGrid";
import Pagination from "../components/product/Pagination";

import products from "../data/products";

const Products = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10">

      <header className="mb-10">
        <h1 className="text-4xl font-bold">
          Shop Collection
        </h1>

        <p className="mt-2 text-[var(--text-secondary)]">
          Discover handcrafted premium leather footwear.
        </p>
      </header>

      <ProductToolbar />

      <div className="mt-8 grid gap-8 lg:grid-cols-[280px_1fr]">

        <FilterSidebar />

        <ProductGrid products={products} />

      </div>

      <Pagination />

    </section>
  );
};

export default Products;