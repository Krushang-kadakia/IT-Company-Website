export default function ContactForm() {
  return (
    <form
      className="
        bg-white dark:bg-brand-dark
        border border-gray-200 dark:border-gray-700
        p-8 rounded-2xl space-y-6
      "
    >
      <h2 className="text-xl font-semibold">
        Send us a message
      </h2>

      <div>
        <label className="text-sm font-medium">
          Name
        </label>
        <input
          type="text"
          placeholder="Your full name"
          className="
            mt-2 w-full rounded-lg px-4 py-2
            border border-gray-300 dark:border-gray-600
            bg-white dark:bg-brand-dark
            focus:outline-none focus:ring-2 focus:ring-brand-primary
          "
        />
      </div>

      <div>
        <label className="text-sm font-medium">
          Email
        </label>
        <input
          type="email"
          placeholder="you@example.com"
          className="
            mt-2 w-full rounded-lg px-4 py-2
            border border-gray-300 dark:border-gray-600
            bg-white dark:bg-brand-dark
            focus:outline-none focus:ring-2 focus:ring-brand-primary
          "
        />
      </div>

      <div>
        <label className="text-sm font-medium">
          Message
        </label>
        <textarea
          rows="4"
          placeholder="Tell us briefly about your project"
          className="
            mt-2 w-full rounded-lg px-4 py-2
            border border-gray-300 dark:border-gray-600
            bg-white dark:bg-brand-dark
            focus:outline-none focus:ring-2 focus:ring-brand-primary
          "
        />
      </div>

      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          alert("Thanks! We’ll get back to you within 24 hours.");
        }}
        className="
          w-full py-3 rounded-lg font-semibold
          bg-brand-primary text-white
          hover:bg-blue-700 transition
        "
      >
        Send Message
      </button>
    </form>
  );
}
