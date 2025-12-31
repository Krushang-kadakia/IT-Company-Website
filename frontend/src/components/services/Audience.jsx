export default function Audience() {
  return (
    <section
      className="
        py-24
        bg-white text-gray-900
        dark:bg-brand-dark dark:text-gray-100
        transition-colors
      "
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center">
          Who We Work With
        </h2>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <Card title="Startups">
            MVPs, rapid prototyping, and scalable foundations.
          </Card>
          <Card title="Growing Businesses">
            Systems that scale with increasing demand.
          </Card>
          <Card title="Enterprises">
            Secure, high-performance, enterprise-grade solutions.
          </Card>
        </div>
      </div>
    </section>
  );
}

function Card({ title, children }) {
  return (
    <div
      className="
        p-8 rounded-xl
        bg-gray-50 dark:bg-brand-dark
        border border-gray-200 dark:border-gray-700
      "
    >
      <h3 className="font-semibold text-lg">
        {title}
      </h3>
      <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
        {children}
      </p>
    </div>
  );
}
