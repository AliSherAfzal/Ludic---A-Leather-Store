import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";

import ProductDescription from "../components/product/details/ProductDescription";
import ProductGallery from "../components/product/details/ProductGallery";
import ProductInfo from "../components/product/details/ProductInfo";
import ProductSpecifications from "../components/product/details/ProductSpecifications";
import RelatedProducts from "../components/product/details/RelatedProducts";
import ShippingInfo from "../components/product/details/ShippingInfo";
import products from "../data/products";

const categoryDescriptions = {
  Men: "A polished leather essential shaped for confident everyday wear, refined occasions, and long hours on your feet.",
  Casual: "A relaxed premium leather silhouette built for comfort, clean styling, and easy day-to-night versatility.",
  Formal: "A sharp handcrafted leather profile designed for tailored looks, boardroom polish, and evening refinement.",
};

const getProductDescription = (product) => {
  return (
    product.description ||
    categoryDescriptions[product.category] ||
    "Handcrafted premium leather footwear made with refined materials, lasting comfort, and a confident modern profile."
  );
};

const getProductStock = (product) => {
  if (product.stock !== undefined) {
    return product.stock;
  }

  return product.rating >= 4.8 ? 12 : 8;
};

const getProductImages = (product) => {
  if (product.images?.length) {
    return product.images;
  }

  const relatedImages = products
    .filter((item) => item.category === product.category && item.id !== product.id)
    .map((item) => item.image);

  return [product.image, ...relatedImages]
    .filter((image, index, images) => images.indexOf(image) === index)
    .slice(0, 4);
};

const getProductSpecifications = (product) => {
  return [
    { label: "Upper", value: "Full-grain leather" },
    { label: "Lining", value: "Soft leather lining" },
    { label: "Sole", value: product.category === "Casual" ? "Cushioned rubber sole" : "Stacked leather sole" },
    { label: "Construction", value: "Hand-finished detailing" },
    { label: "Category", value: product.category },
    { label: "Care", value: "Use a neutral leather conditioner" },
  ];
};

const ProductNotFound = () => {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-4xl items-center justify-center px-6 py-16">
      <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-10 text-center">
        <p className="text-sm uppercase tracking-widest text-[var(--accent)]">
          Product Not Found
        </p>

        <h1 className="mt-4 text-3xl font-bold">
          This product is no longer available.
        </h1>

        <p className="mx-auto mt-3 max-w-xl text-[var(--text-secondary)]">
          The item may have moved, sold out, or the link may be incorrect.
        </p>

        <Link
          to="/products"
          className="mt-8 inline-flex rounded-xl bg-[var(--accent)] px-8 py-3 font-medium text-[var(--bg-primary)] transition-colors duration-300 hover:bg-[var(--accent-hover)]"
        >
          Back to Collection
        </Link>
      </div>
    </section>
  );
};

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((item) => String(item.id) === id);

  const description = product ? getProductDescription(product) : "";
  const stock = product ? getProductStock(product) : 0;
  const images = useMemo(() => (product ? getProductImages(product) : []), [product]);
  const specifications = useMemo(
    () => (product ? getProductSpecifications(product) : []),
    [product]
  );

  if (!product) {
    return <ProductNotFound />;
  }

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
          <li>
            <Link to="/products" className="transition-colors duration-300 hover:text-[var(--accent)]">
              Products
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-[var(--text-primary)]" aria-current="page">
            {product.name}
          </li>
        </ol>
      </nav>

      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)]">
        <ProductGallery key={product.id} images={images} productName={product.name} />

        <ProductInfo
          product={product}
          description={description}
          stock={stock}
        />
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <ProductDescription description={description} />
        <ProductSpecifications specifications={specifications} />
      </div>

      <ShippingInfo />

      <RelatedProducts product={product} products={products} />
    </section>
  );
};

export default ProductDetails;
