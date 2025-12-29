import CountUp from "../common/CountUp";

export default function Stats() {
  return (
    <section
      className="
        py-24 text-center
        bg-white text-gray-900
        dark:bg-brand-dark dark:text-gray-100
        transition-colors
      "
    >
      <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-3 gap-8">
        <Stat end={50} label="Projects Delivered" suffix="+" />
        <Stat end={20} label="Happy Clients" suffix="+" />
        <Stat end={5} label="Years Experience" suffix="+" />
      </div>
    </section>
  );
}

function Stat({ end, label, suffix }) {
  return (
    <div>
      <p className="text-4xl font-bold text-brand-primary">
        <CountUp end={end} />
        {suffix}
      </p>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
        {label}
      </p>
    </div>
  );
}
