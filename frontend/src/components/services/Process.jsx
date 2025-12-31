export default function Process() {
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
          How We Work
        </h2>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <Step number="01" title="Discover">
            Understand business goals and technical requirements.
          </Step>
          <Step number="02" title="Design">
            Create scalable architecture and intuitive UX.
          </Step>
          <Step number="03" title="Build">
            Develop, test, and iterate using modern tools.
          </Step>
          <Step number="04" title="Scale">
            Deploy, monitor, and continuously improve.
          </Step>
        </div>
      </div>
    </section>
  );
}

function Step({ number, title, children }) {
  return (
    <div className="text-center p-6">
      <div className="text-brand-primary font-bold text-xl">
        {number}
      </div>
      <h3 className="mt-4 font-semibold">
        {title}
      </h3>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
        {children}
      </p>
    </div>
  );
}
