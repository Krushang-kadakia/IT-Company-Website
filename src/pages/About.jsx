export default function About() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-brand-dark transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
                About TechNova
            </h1>
            <p className="mt-6 text-gray-600 text-sm dark:text-gray-400 max-w-3xl mx-auto">
                TechNova is a technology-driven IT company focused on building
                scalable digital solutions for startups and enterprises.
            </p>
        </div>

        {/* Mission & Vision */}
        <div className="mt-20 grid md:grid-cols-2 gap-12">
          <div className="bg-white p-10 rounded-xl shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900">
              Our Mission
            </h2>
            <p className="mt-4 text-gray-600">
              To help businesses leverage modern technologies to innovate,
              scale, and stay competitive in a digital-first world.
            </p>
          </div>

          <div className="bg-white p-10 rounded-xl shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900">
              Our Vision
            </h2>
            <p className="mt-4 text-gray-600">
              To become a trusted global technology partner delivering
              impactful software products and services.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-gray-900">
            Why Choose TechNova
          </h2>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <Value title="Engineering Excellence">
              Clean architecture, scalable code, and modern best practices.
            </Value>

            <Value title="Client-Centric Approach">
              We align technology with your business goals.
            </Value>

            <Value title="Modern Tech Stack">
              React, Node, Cloud, AI, and DevOps-driven solutions.
            </Value>

            <Value title="Long-Term Partnership">
              We don’t just deliver projects — we build relationships.
            </Value>
          </div>
        </div>

      </div>
    </section>
  );
}

function Value({ title, children }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm 
                    hover:shadow-lg hover:-translate-y-1 
                    transition-all duration-300">
      
      <h3 className="text-lg font-semibold text-gray-900">
        {title}
      </h3>

      <p className="mt-4 text-sm text-gray-600">
        {children}
      </p>
    </div>
  );
}
