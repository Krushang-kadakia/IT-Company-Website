import ServiceCard from "../components/services/ServiceCard";
import Process from "../components/services/Process";
import TechStack from "../components/services/TechStack";
import Audience from "../components/services/Audience";

export default function Services() {
  return (
    <>
      {/* Services Overview */}
      <section
        className="
          py-24
          bg-gray-50 text-gray-900
          dark:bg-brand-dark dark:text-gray-100
          transition-colors
        "
      >
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-center">
            Our Services
          </h1>

          <p className="mt-6 text-sm text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            End-to-end software development services designed to help
            businesses scale efficiently.
          </p>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <ServiceCard title="Web Development" description="Modern, high-performance web applications." />
            <ServiceCard title="Mobile Apps" description="Cross-platform mobile solutions for iOS and Android." />
            <ServiceCard title="AI & Automation" description="Intelligent systems to optimize workflows." />
            <ServiceCard title="Cloud & DevOps" description="Scalable cloud infrastructure and CI/CD pipelines." />
            <ServiceCard title="UI/UX Design" description="User-focused design for better engagement." />
            <ServiceCard title="Enterprise Software" description="Custom systems built for scale and security." />
          </div>
        </div>
      </section>

      <Process />
      <TechStack />
      <Audience />
    </>
  );
}
