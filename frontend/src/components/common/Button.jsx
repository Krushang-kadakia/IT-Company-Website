import { motion } from "framer-motion";

export default function Button({ children, variant = "primary" }) {
  const base =
    `
    relative inline-flex items-center justify-center
    px-6 py-3 rounded-lg font-semibold
    focus:outline-none focus-visible:ring-2
    focus-visible:ring-brand-primary focus-visible:ring-offset-2
    `;

  const variants = {
    primary:
      `
      bg-brand-primary text-white
      shadow-md
      `,
    outline:
      `
      border border-brand-primary text-brand-primary
      hover:bg-brand-primary hover:text-white
      `,
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={`${base} ${variants[variant]}`}
    >
      {children}
    </motion.button>
  );
}
