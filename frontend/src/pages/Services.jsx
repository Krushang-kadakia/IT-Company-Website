import { useState, useEffect } from "react";
import {
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  CpuChipIcon,
  CloudIcon,
  PaintBrushIcon,
  BuildingOffice2Icon,
} from "@heroicons/react/24/outline";

import ServiceCard from "../components/services/ServiceCard";
import Process from "../components/services/Process";
import TechStack from "../components/services/TechStack";
import Audience from "../components/services/Audience";
import AnimatedSection from "../components/common/AnimatedSection";

const iconMap = {
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  CpuChipIcon,
  CloudIcon,
  PaintBrushIcon,
  BuildingOffice2Icon,
};

export default function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('/api/services')
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.error("Failed to fetch services:", err));
  }, []);

  return (
    <>
      {/* Services Overview */}
      <AnimatedSection delay={0.1}>
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
              {services.map((service) => (
                <ServiceCard
                  key={service.id}
                  title={service.title}
                  description={service.description}
                  icon={iconMap[service.icon]}
                  image={service.image}
                />
              ))}
            </div>

          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <Process />
      </AnimatedSection>

      <AnimatedSection delay={0.3}>
        <TechStack />
      </AnimatedSection>

      <AnimatedSection delay={0.4}>
        <Audience />
      </AnimatedSection>

    </>
  );
}
