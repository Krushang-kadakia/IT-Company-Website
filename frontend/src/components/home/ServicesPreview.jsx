import { useState, useEffect } from "react";
import * as HeroIcons from "@heroicons/react/24/outline";

export default function ServicesPreview() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('/api/services')
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.error("Failed to fetch services:", err));
  }, []);

  return (
    <section className="py-24 bg-white dark:bg-brand-dark transition-colors">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Our Services
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            End-to-end digital solutions tailored for your business.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const IconComponent = HeroIcons[service.icon] || HeroIcons.QuestionMarkCircleIcon;
            return (
              <ServiceCard
                key={service.id}
                image={service.image}
                icon={IconComponent}
                title={service.title}
                description={service.description}
              />
            );
          })}
        </div>

      </div>
    </section>
  );
}

function ServiceCard({ image, icon: Icon, title, description }) {
  return (
    <div
      className="
        group
        p-8 rounded-xl
        border border-gray-200 dark:border-gray-700
        bg-white dark:bg-brand-dark
        transition-all duration-300
        hover:-translate-y-1 hover:shadow-lg
      "
    >
      {/* Illustration */}
      <img
        src={image}
        alt={title}
        className="h-24 mx-auto mb-6 object-contain"
        loading="lazy"
      />

      {/* Icon */}
      <div
        className="
          h-12 w-12 mx-auto flex items-center justify-center rounded-lg
          bg-brand-primary/10 text-brand-primary
          transition-transform duration-300
          group-hover:scale-110
        "
      >
        <Icon className="h-6 w-6" />
      </div>

      <h3 className="mt-6 text-lg font-semibold text-center text-gray-900 dark:text-gray-100">
        {title}
      </h3>

      <p className="mt-3 text-sm text-center text-gray-600 dark:text-gray-400">
        {description}
      </p>
    </div>
  );
}
