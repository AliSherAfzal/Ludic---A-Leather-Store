import { useState } from "react";

const ProductGallery = ({ images, productName }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  return (
    <div className="grid gap-4 md:grid-cols-[96px_1fr] lg:sticky lg:top-28 lg:self-start">
      <div className="order-2 flex gap-3 overflow-x-auto md:order-1 md:flex-col md:overflow-visible">
        {images.map((image, index) => {
          const isSelected = image === selectedImage;

          return (
            <button
              key={`${image}-${index}`}
              type="button"
              onClick={() => setSelectedImage(image)}
              className={`h-24 w-24 shrink-0 overflow-hidden rounded-xl border bg-[var(--surface)] transition-all duration-300 ${
                isSelected
                  ? "border-[var(--accent)] shadow-[0_0_24px_rgba(200,155,93,0.18)]"
                  : "border-[var(--border)] hover:border-[var(--accent)]"
              }`}
              aria-label={`View ${productName} image ${index + 1}`}
            >
              <img
                src={image}
                alt={`${productName} thumbnail ${index + 1}`}
                className="h-full w-full object-cover"
              />
            </button>
          );
        })}
      </div>

      <div className="order-1 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] md:order-2">
        <div className="relative aspect-square">
          <div className="absolute inset-8 rounded-full bg-[var(--accent)] opacity-10 blur-3xl" />

          <img
            src={selectedImage}
            alt={productName}
            className="relative h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;
