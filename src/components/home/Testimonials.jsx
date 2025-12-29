export default function Testimonials() {
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
          What Our Clients Say
        </h2>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <Testimonial
            quote="TechNova delivered our platform ahead of schedule with outstanding quality."
            name="Amit Sharma"
            role="Founder, AlphaCorp"
          />
          <Testimonial
            quote="Their engineering team understood our business needs perfectly."
            name="Sarah Lee"
            role="CTO, NovaLabs"
          />
          <Testimonial
            quote="Reliable, transparent, and technically strong — highly recommended."
            name="Rahul Mehta"
            role="Product Manager, Cloudify"
          />
        </div>
      </div>
    </section>
  );
}

function Testimonial({ quote, name, role }) {
  return (
    <div
      className="
        bg-white dark:bg-brand-dark
        border border-gray-200 dark:border-gray-700
        p-8 rounded-2xl
        shadow-sm hover:shadow-lg
        transition-all duration-300
      "
    >
      <p className="text-sm text-gray-600 dark:text-gray-400 italic">
        “{quote}”
      </p>

      <div className="mt-6">
        <p className="font-semibold">{name}</p>
        <p className="text-xs text-gray-500 dark:text-gray-400">{role}</p>
      </div>
    </div>
  );
}
