import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Button({ children, variant = "primary", to, ...props }) {
  const base =
    `
    relative inline-flex items-center justify-center
    px-6 py-3 rounded-lg font-semibold
    cursor-pointer
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

  const Component = to ? Link : motion.button;
  const extraProps = to ? { to } : { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 } };

  return (
    <Component
      className={`${base} ${variants[variant]}`}
      {...extraProps}
      {...props}
    >
      {children}
    </Component>
  );
}
