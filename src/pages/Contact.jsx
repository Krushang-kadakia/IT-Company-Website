import ContactForm from "../components/contact/ContactForm";

export default function Contact() {
  return (
    <>
      {/* Main Contact Section */}
      <section
        className="
          py-24
          bg-gray-50 text-gray-900
          dark:bg-brand-dark dark:text-gray-100
          transition-colors
        "
      >
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          
          {/* Left Content */}
          <div>
            <h1 className="text-4xl font-bold">
              Get in Touch
            </h1>

            <p className="mt-6 text-sm text-gray-600 dark:text-gray-400 max-w-md">
              Tell us about your project, idea, or challenge.  
              We’ll help you figure out the best technical solution.
            </p>

            {/* Contact Options */}
            <div className="mt-10 space-y-4 text-sm">
              <p>
                <strong>Email:</strong>{" "}
                <span className="text-brand-primary">
                  contact@technova.com
                </span>
              </p>
              <p>
                <strong>Phone:</strong> +91 98765 43210
              </p>
              <p>
                <strong>Location:</strong> India (Remote-friendly)
              </p>
            </div>

            {/* What Happens Next */}
            <div className="mt-12 p-6 rounded-xl bg-white dark:bg-brand-dark border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold">
                What happens next?
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• We review your message within 24 hours</li>
                <li>• Schedule a free discovery call</li>
                <li>• Share a clear plan and next steps</li>
              </ul>
            </div>
          </div>

          {/* Right Form */}
          <ContactForm />
        </div>
      </section>

      {/* FAQ Section */}
      <section
        className="
          py-24
          bg-white text-gray-900
          dark:bg-brand-dark dark:text-gray-100
          transition-colors
        "
      >
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center">
            Frequently Asked Questions
          </h2>

          <div className="mt-12 space-y-6">
            <FAQ
              question="Do you work with startups?"
              answer="Yes. We regularly help startups build MVPs, scale platforms, and iterate quickly."
            />
            <FAQ
              question="What is your pricing model?"
              answer="We offer flexible pricing based on project scope, timelines, and engagement type."
            />
            <FAQ
              question="How soon can you start?"
              answer="Typically within 1–2 weeks after finalizing requirements."
            />
          </div>
        </div>
      </section>
    </>
  );
}

function FAQ({ question, answer }) {
  return (
    <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-700">
      <h3 className="font-semibold">
        {question}
      </h3>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
        {answer}
      </p>
    </div>
  );
}
