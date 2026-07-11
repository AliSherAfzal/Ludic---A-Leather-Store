import Button from "../ui/Button";

const Hero = () => {
  return (
    <section className="mx-auto flex min-h-[85vh] max-w-7xl items-center px-6">
      <div className="max-w-2xl">
        <p className="mb-5 uppercase tracking-[0.4em] text-[var(--accent)]">
          Premium Leather Footwear
        </p>

        <h1 className="mb-8 text-6xl font-bold leading-tight">
          Crafted For Those Who Walk With Confidence.
        </h1>

        <p className="mb-10 text-lg leading-8 text-[var(--text-secondary)]">
          Authentic leather shoes designed with timeless craftsmanship,
          exceptional comfort, and premium quality.
        </p>

        <Button>Shop Collection</Button>
      </div>
    </section>
  );
};

export default Hero;
