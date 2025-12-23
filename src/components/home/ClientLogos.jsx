export default function ClientLogos() {
  return (
    <section
      className="
        py-20 text-center
        bg-white/70 text-gray-900
        dark:bg-brand-dark/70 dark:text-gray-100
        backdrop-blur-md
        transition-colors
      "
    >
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400">
          Trusted by teams worldwide
        </p>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center opacity-70">
          <Logo name="AlphaCorp" />
          <Logo name="NovaLabs" />
          <Logo name="Cloudify" />
          <Logo name="DataNest" />
          <Logo name="TechSphere" />
        </div>
      </div>
    </section>
  );
}

function Logo({ name }) {
  return (
    <div className="text-lg font-semibold text-gray-600 dark:text-gray-300">
      {name}
    </div>
  );
}
