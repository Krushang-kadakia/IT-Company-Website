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
            name="Vendora"
            status="Live"
            description="AI-powered platform to streamline invoice submission and processing for vendors"
            features={[
              "AI assistant invoice submission",
              "Online submission and processing",
              "Timely processing of invoices",
              "Structured and organise bill management",
            ]}
            useCases={[
              "Hospitals",
              "Real estate companies",
              "Product-based businesses",
            ]}
          />

          <ProductCard
            name="MSP"
            status="Coming Soon"
            description="Project management application ."
            features={[
              "Mail integration",
              "Graph visualisation",
              "Export of documents",
              "Role and access management",
            ]}
            useCases={[
              "Real estate",
              "Product based IT company",
              "Marketing and Sales",
              "Manufacturing and Production",
            ]}
          />

          <ProductCard
            name="Quotalyze"
            status="Coming Soon"
            description="An AI-powered quotation analytics platform for data-driven decisions."
            features={[
              "Suppport for multiple file types",
              "Ensures completeness of quotations for analysis",
              "Compares previous quotes to analyze trends",
              "Downloadable reports",
            ]}
            useCases={[
              "Contract teams",
              "Business analysts",
              "Purchase teams",
            ]}
          />
        </div>
      </div>
    </section>
  );
}
