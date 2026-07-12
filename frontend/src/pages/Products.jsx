import { useEffect, useMemo, useState } from "react";

import ProductToolbar from "../components/product/ProductToolbar";
import FilterSidebar from "../components/product/FilterSidebar";
import ProductGrid from "../components/product/ProductGrid";
import Pagination from "../components/product/Pagination";

import products from "../data/products";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("featured");
  const [currentPage, setCurrentPage] = useState(1);

const productsPerPage = 6;
useEffect(() => {
  setCurrentPage(1);
}, [searchTerm, selectedCategory, sortOption]);

  const filteredProducts = useMemo(() => {
  let result = [...products].filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  switch (sortOption) {
    case "price-low":
      result.sort((a, b) => a.price - b.price);
      break;

    case "price-high":
      result.sort((a, b) => b.price - a.price);
      break;

    case "rating":
      result.sort((a, b) => b.rating - a.rating);
      break;

    default:
      break;
  }

  return result;
}, [searchTerm, selectedCategory, sortOption]);

const totalPages = Math.ceil(
  filteredProducts.length / productsPerPage
);

const paginatedProducts = useMemo(() => {
  const start = (currentPage - 1) * productsPerPage;

  return filteredProducts.slice(
    start,
    start + productsPerPage
  );
}, [filteredProducts, currentPage]);

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

      <ProductToolbar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        sortOption={sortOption}
        onSortChange={setSortOption}
      />

      <div className="mt-8 grid gap-8 lg:grid-cols-[280px_1fr]">

        <FilterSidebar
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        <ProductGrid
    products={paginatedProducts}
/>

      </div>

      <Pagination
    currentPage={currentPage}
    totalPages={totalPages}
    onPageChange={setCurrentPage}
/>

    </section>
  );
};

export default Products;