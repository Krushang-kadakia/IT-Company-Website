import {
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  CpuChipIcon,
  CloudIcon,
  PaintBrushIcon,
  BuildingOffice2Icon,
} from "@heroicons/react/24/outline";

import webDev from "../../assets/services/web-dev.png";
import mobileApp from "../../assets/services/mobile-app.png";
import aiAutomation from "../../assets/services/ai-automation.png";
import cloudDevops from "../../assets/services/cloud-devops.png";
import uiux from "../../assets/services/ui-ux.png";
import enterprise from "../../assets/services/enterprise.png";

export default function ServicesPreview() {
  return (
    <section className="py-24 bg-white dark:bg-brand-dark transition-colors">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Our Services
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            End-to-end digital solutions tailored for your business.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            image={webDev}
            icon={CodeBracketIcon}
            title="Web Development"
            description="Modern, scalable, and high-performance web applications."
          />

          <ServiceCard
            image={mobileApp}
            icon={DevicePhoneMobileIcon}
            title="Mobile App Development"
            description="Cross-platform mobile apps for iOS and Android."
          />

          <ServiceCard
            image={aiAutomation}
            icon={CpuChipIcon}
            title="AI & Automation"
            description="Intelligent systems to automate and optimize workflows."
          />

          <ServiceCard
            image={cloudDevops}
            icon={CloudIcon}
            title="Cloud & DevOps"
            description="Secure, scalable cloud infrastructure and CI/CD pipelines."
          />

          <ServiceCard
            image={uiux}
            icon={PaintBrushIcon}
            title="UI / UX Design"
            description="User-centered designs that enhance engagement."
          />

          <ServiceCard
            image={enterprise}
            icon={BuildingOffice2Icon}
            title="Enterprise Solutions"
            description="Robust systems built for enterprise scale and security."
          />
        </div>

      </div>
    </section>
  );
}

function ServiceCard({ image, icon: Icon, title, description }) {
  return (
    <div
      className="
        group
        p-8 rounded-xl
        border border-gray-200 dark:border-gray-700
        bg-white dark:bg-brand-dark
        transition-all duration-300
        hover:-translate-y-1 hover:shadow-lg
      "
    >
      {/* Illustration */}
      <img
        src={image}
        alt={title}
        className="h-24 mx-auto mb-6 object-contain"
        loading="lazy"
      />

      {/* Icon */}
      <div
        className="
          h-12 w-12 mx-auto flex items-center justify-center rounded-lg
          bg-brand-primary/10 text-brand-primary
          transition-transform duration-300
          group-hover:scale-110
        "
      >
        <Icon className="h-6 w-6" />
      </div>

      <h3 className="mt-6 text-lg font-semibold text-center text-gray-900 dark:text-gray-100">
        {title}
      </h3>

      <p className="mt-3 text-sm text-center text-gray-600 dark:text-gray-400">
        {description}
      </p>
    </div>
  );
}
