import { CodeBracketIcon } from "@heroicons/react/24/outline";

export default function ServiceCard({ title, description }) {
  return (
<   div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      <CodeBracketIcon className="h-8 w-8 text-brand-primary" />

      <h3 className="mt-4 text-xl font-semibold text-gray-900">
        {title}
      </h3>

      <p className="mt-3 text-gray-600 text-sm">
        {description}
      </p>
    </div>
  );
}
