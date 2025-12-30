import { motion } from "framer-motion";

export default function ServiceCard({
  title,
  description,
  icon: Icon,
  image,
}) {
  return (
    <motion.div
      whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="
        group
        flex flex-col items-center text-center
        bg-white dark:bg-brand-dark
        border border-gray-200 dark:border-gray-700
        p-8 rounded-xl
        cursor-pointer
      "
    >
      {/* Image Container (inherits card background) */}
      {image && (
        <div
          className="
            mb-6
            flex items-center justify-center
            w-full
          "
        >
          <img
            src={image}
            alt={title}
            className="
              h-32 w-auto
              object-contain
              mix-blend-multiply dark:mix-blend-screen
            "
            loading="lazy"
          />
        </div>
      )}

      {/* Icon */}
      {Icon && (
        <div
          className="
            h-12 w-12 mb-4
            flex items-center justify-center
            rounded-lg
            bg-brand-primary/10 text-brand-primary
            transition-transform duration-300
            group-hover:scale-110
          "
        >
          <Icon className="h-6 w-6" />
        </div>
      )}

      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
        {title}
      </h3>

      <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
        {description}
      </p>
    </motion.div>
  );
}
