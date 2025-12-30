import Button from "../common/Button";
import { Link } from "react-router-dom";
import ScrollReveal from "../common/ScrollReveal";

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
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white flex flex-col items-center">
        <ScrollReveal>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Building Scalable Digital Products
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="mt-6 text-lg text-gray-200 max-w-2xl mx-auto">
            We help startups and enterprises design, develop, and scale
            software solutions using modern technologies.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="mt-12 flex justify-center gap-4">
            <Link to="/services">
              <Button variant="outline">Our Services</Button>
            </Link>
            <Link to="/products">
              <Button variant="outline">Our Products</Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline">Contact Us</Button>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
