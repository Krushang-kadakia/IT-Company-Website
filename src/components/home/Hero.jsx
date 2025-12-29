import Button from "../common/Button";

export default function Hero() {
  return (
    <section
      className="relative py-32 overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: "url('/src/assets/images/hero-bg.png')",
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60 dark:bg-black/70" />

      {/* Subtle brand gradient overlay */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-br
          from-brand-primary/20
          to-brand-secondary/20
          dark:from-brand-primary/30
          dark:to-brand-secondary/30
        "
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Building Scalable Digital Products
        </h1>

        <p className="mt-6 text-lg text-gray-200 max-w-2xl mx-auto">
          We help startups and enterprises design, develop, and scale
          software solutions using modern technologies.
        </p>

        <div className="mt-12 flex justify-center gap-4">
          <Button>Our Services</Button>
          <Button variant="outline">Contact Us</Button>
        </div>
      </div>
    </section>
  );
}
