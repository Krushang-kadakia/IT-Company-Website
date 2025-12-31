import { useState, useEffect } from "react";
import ProductCard from "../components/products/ProductCard";
import AnimatedSection from "../components/common/AnimatedSection";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/api/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Failed to fetch products:", err));
  }, []);

  return (
    <section
      className="
        py-24
        bg-gray-50 text-gray-900
        dark:bg-brand-dark dark:text-gray-100
        transition-colors
      "
    >
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-4xl font-bold text-center">
          Our Products
        </h1>

        <p className="mt-6 text-sm text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Software products designed to solve real-world business problems.
        </p>

        <div className="mt-20 space-y-16">

          {products.map((product, index) => (
            <AnimatedSection key={product.id} delay={0.1 + index * 0.1}>
              <ProductCard
                image={product.image}
                name={product.name}
                status={product.status}
                description={product.description}
                features={product.features}
                useCases={product.useCases}
              />
            </AnimatedSection>
          ))}

        </div>
      </div>
    </section>
  );
}
