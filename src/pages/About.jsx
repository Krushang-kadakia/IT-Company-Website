import {
  SparklesIcon,
  UserGroupIcon,
  CpuChipIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

import AnimatedSection from "../components/common/AnimatedSection";

export default function About() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-brand-dark transition-colors">
      <div className="max-w-7xl mx-auto px-6">

        {/* Intro */}
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
              About TechNova
            </h1>
            <p className="mt-6 text-gray-600 text-sm dark:text-gray-400 max-w-3xl mx-auto">
              TechNova is a technology-driven IT company focused on building
              scalable digital solutions for startups and enterprises.
            </p>
          </div>
        </AnimatedSection>

        {/* Mission & Vision */}
        <div className="mt-20 grid md:grid-cols-2 gap-12">
          <AnimatedSection delay={0.1}>
            <div className="bg-white dark:bg-brand-dark p-10 rounded-xl shadow-sm">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                Our Mission
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                To help businesses leverage modern technologies to innovate,
                scale, and stay competitive in a digital-first world.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="bg-white dark:bg-brand-dark p-10 rounded-xl shadow-sm">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                Our Vision
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                To become a trusted global technology partner delivering
                impactful software products and services.
              </p>
            </div>
          </AnimatedSection>
        </div>

        {/* Why Choose Us */}
        <AnimatedSection delay={0.2}>
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100">
              Why Choose TechNova
            </h2>

            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <Value icon={SparklesIcon} title="Engineering Excellence">
                Clean architecture, scalable code, and modern best practices.
              </Value>

              <Value icon={UserGroupIcon} title="Client-Centric Approach">
                We align technology with your business goals.
              </Value>

              <Value icon={CpuChipIcon} title="Modern Tech Stack">
                React, Node, Cloud, AI, and DevOps-driven solutions.
              </Value>

              <Value icon={ShieldCheckIcon} title="Long-Term Partnership">
                We don’t just deliver projects — we build relationships.
              </Value>
            </div>
          </div>
        </AnimatedSection>

      </div>
      <section className="mt-24">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100">
          Our Team
        </h2>

        <p className="mt-4 text-sm text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          A team of engineers, designers, and problem-solvers passionate about building quality software.
        </p>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <TeamMember name="Product Engineering" role="Backend • Frontend • Cloud" />
          <TeamMember name="Design & UX" role="UI/UX • Research • Prototyping" />
          <TeamMember name="AI & Data" role="ML • Automation • Analytics" />
        </div>
      </section>
    </section>

  );
}

function Value({ icon: Icon, title, children }) {
  return (
    <div
      className="
        bg-white dark:bg-brand-dark
        p-8 rounded-xl border border-gray-200 dark:border-gray-700
        transition-all
      "
    >
      <div className="h-10 w-10 rounded-lg bg-brand-primary/10 text-brand-primary flex items-center justify-center">
        <Icon className="h-5 w-5" />
      </div>

      <h3 className="mt-6 text-lg font-semibold text-gray-900 dark:text-gray-100">
        {title}
      </h3>

      <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
        {children}
      </p>
    </div>
  );
}

function TeamMember({ name, role }) {
  return (
    <div
      className="
        bg-white dark:bg-brand-dark
        p-8 rounded-xl border border-gray-200 dark:border-gray-700
        text-center
      "
    >
      <div className="mx-auto h-16 w-16 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center text-xl font-bold">
        {name[0]}
      </div>

      <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-gray-100">
        {name}
      </h3>

      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
        {role}
      </p>
    </div>
  );
}
