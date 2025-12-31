import Button from "../common/Button";

export default function CTA() {
  return (
    <section
      className="
        py-28 text-center
        bg-gray-100 text-gray-900
        dark:bg-gradient-to-r
        dark:from-brand-primary dark:to-brand-secondary
        dark:text-white
        transition-colors
      "
    >
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold">
          Ready to Build Something Great?
        </h2>

        <p className="mt-6 text-sm text-gray-600 dark:text-blue-100">
          Let’s discuss your idea and turn it into a scalable digital product.
        </p>

        <div className="mt-10">
          <Button>Contact Us</Button>
        </div>
      </div>
    </section>
  );
}
