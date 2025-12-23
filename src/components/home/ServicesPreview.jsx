import { CodeBracketIcon, CloudIcon, CpuChipIcon } from "@heroicons/react/24/outline";

export default function ServicesPreview() {
  return (
    <section
      className="
        py-24
        bg-white/70 text-gray-900
        dark:bg-brand-dark/70 dark:text-gray-100
        backdrop-blur-md
      "
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold">
          What We Do
        </h2>

        <p className="mt-6 text-sm text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          We build modern digital solutions that help businesses grow faster.
        </p>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <Card icon={<CodeBracketIcon className="h-8 w-8" />} title="Web & App Development" />
          <Card icon={<CloudIcon className="h-8 w-8" />} title="Cloud & DevOps" />
          <Card icon={<CpuChipIcon className="h-8 w-8" />} title="AI & Automation" />
        </div>
      </div>
    </section>
  );
}

function Card({ icon, title }) {
  return (
    <div
      className="
        bg-gray-50 dark:bg-brand-dark
        border border-gray-200 dark:border-gray-700
        p-8 rounded-xl
        hover:shadow-lg hover:-translate-y-1
        transition-all duration-300
      "
    >
      <div className="text-brand-primary">{icon}</div>
      <h3 className="mt-4 font-semibold">{title}</h3>
    </div>
  );
}
