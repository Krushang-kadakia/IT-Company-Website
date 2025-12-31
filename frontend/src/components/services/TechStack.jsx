export default function TechStack() {
  return (
    <section
      className="
        py-24
        bg-gray-50 text-gray-900
        dark:bg-brand-dark dark:text-gray-100
        transition-colors
      "
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold">
          Our Technology Stack
        </h2>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {[
            "React",
            "Node.js",
            "Tailwind CSS",
            "AWS",
            "Docker",
            "PostgreSQL",
            "Python",
            "AI / ML",
          ].map((tech) => (
            <span
              key={tech}
              className="
                px-4 py-2 rounded-full text-sm
                bg-white dark:bg-brand-dark
                border border-gray-200 dark:border-gray-700
              "
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
