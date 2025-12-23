import Button from "../common/Button";

export default function Hero() {
  return (
    <section
      className="
        relative py-28 overflow-hidden
        bg-white/70 text-gray-900
        dark:bg-brand-dark/70 dark:text-gray-100
        backdrop-blur-md
        transition-colors
      "
    >
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-br 
                      from-brand-primary/10 
                      to-brand-secondary/10 
                      dark:from-brand-primary/20 
                      dark:to-brand-secondary/20" />

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Building Scalable Digital Products
        </h1>

        <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
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
