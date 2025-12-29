import ProductCard from "../components/products/ProductCard";

export default function Products() {
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
          
          <ProductCard
            name="Embaino"
            status="Beta"
            description="A smart Visitor Management System for corporate and residential usage."
            features={[
              "Touchless registration to avoid queues and hasel",
              "Face recognition for faster and smooth entry",
              "OTP verification for authentication",
            ]}
            useCases={[
              "Corporate Parks",
              "Residential Complexes",
              "Major Events",
            ]}
          />
          
          <ProductCard
            name="InvoicePro"
            status="Live"
            description="A smart invoicing and billing platform for modern businesses."
            features={[
              "Automated invoices & payments",
              "GST & tax support",
              "Customer & subscription management",
              "Secure cloud storage",
            ]}
            useCases={[
              "Freelancers",
              "Small businesses",
              "Agencies",
            ]}
          />

          <ProductCard
            name="CloudOps"
            status="Beta"
            description="A DevOps automation and cloud monitoring toolkit."
            features={[
              "CI/CD pipeline automation",
              "Real-time monitoring",
              "Cloud cost optimization",
              "Alerting & logging",
            ]}
            useCases={[
              "DevOps teams",
              "Startups",
              "Enterprises",
            ]}
          />

          <ProductCard
            name="AI Insights"
            status="Coming Soon"
            description="An AI-powered analytics platform for data-driven decisions."
            features={[
              "Predictive analytics",
              "Custom dashboards",
              "Automated reports",
              "AI recommendations",
            ]}
            useCases={[
              "Product teams",
              "Business analysts",
              "Founders",
            ]}
          />
        </div>
      </div>
    </section>
  );
}
