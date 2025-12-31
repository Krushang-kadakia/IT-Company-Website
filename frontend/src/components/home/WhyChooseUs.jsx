import {
  SparklesIcon,
  ChartBarIcon,
  UserGroupIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

export default function WhyChooseUs() {
  return (
    <section
      className="
        py-28
        bg-gray-50 text-gray-900
        dark:bg-brand-dark dark:text-gray-100
       transition-colors
      "
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center">
          Why Choose TechNova
        </h2>

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <Card icon={<SparklesIcon className="h-6 w-6" />} title="Modern Technology" />
          <Card icon={<ChartBarIcon className="h-6 w-6" />} title="Scalable Solutions" />
          <Card icon={<UserGroupIcon className="h-6 w-6" />} title="Client-Centric" />
          <Card icon={<ShieldCheckIcon className="h-6 w-6" />} title="Reliable Delivery" />
        </div>
      </div>
    </section>
  );
}

function Card({ icon, title }) {
  return (
    <div
      className="
        bg-white dark:bg-brand-dark
        border border-gray-200 dark:border-gray-700
        p-8 rounded-2xl
        hover:shadow-xl hover:-translate-y-1
        transition-all duration-300
      "
    >
      <div className="h-12 w-12 flex items-center justify-center rounded-xl
                      bg-brand-primary/10 text-brand-primary">
        {icon}
      </div>
      <h3 className="mt-6 font-semibold">{title}</h3>
    </div>
  );
}
