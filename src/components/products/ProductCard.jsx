export default function ProductCard({
  image,
  name,
  status,
  description,
  features,
  useCases,
}) {
  const statusStyles = {
    Live: "bg-green-100 text-green-700",
    Beta: "bg-yellow-100 text-yellow-700",
    "Coming Soon": "bg-gray-200 text-gray-700",
  };

  return (
    <div
      className="
        bg-white dark:bg-brand-dark
        border border-gray-200 dark:border-gray-700
        rounded-2xl p-10
        transition-all duration-300
        hover:shadow-xl hover:-translate-y-1
      "
    >
      {/* Top Section */}
      <div className="grid md:grid-cols-5 gap-10 items-start">

        {/* Product Image */}
        <div className="md:col-span-2">
          <div
            className="
              rounded-xl
              bg-white dark:bg-brand-dark
              p-4
              flex justify-center
            "
          >
            <img
              src={image}
              alt={name}
              className="
                max-h-64 w-auto
                object-contain
                mix-blend-multiply dark:mix-blend-screen
              "
              loading="lazy"
            />
          </div>
        </div>

        {/* Product Content */}
        <div className="md:col-span-3">

          {/* Header */}
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">
              {name}
            </h2>

            <span
              className={`text-xs font-semibold px-3 py-1 rounded-full ${statusStyles[status]}`}
            >
              {status}
            </span>
          </div>

          <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            {description}
          </p>

          {/* Features */}
          <div className="mt-8">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
              Key Features
            </h3>

            <ul className="mt-4 grid sm:grid-cols-2 gap-3 text-sm">
              {features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2"
                >
                  <span className="text-brand-primary">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Use Cases */}
          <div className="mt-8">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
              Ideal For
            </h3>

            <div className="mt-3 flex flex-wrap gap-2">
              {useCases.map((useCase) => (
                <span
                  key={useCase}
                  className="
                    px-3 py-1 rounded-full text-xs
                    bg-gray-100 dark:bg-brand-dark
                    border border-gray-200 dark:border-gray-700
                  "
                >
                  {useCase}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10">
            <button
              className="
                text-sm font-semibold text-brand-primary
                hover:underline
              "
            >
              Learn more →
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
