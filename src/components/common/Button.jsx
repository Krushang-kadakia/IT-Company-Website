export default function Button({ children, variant = "primary" }) {
  const base =
    "relative inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 active:scale-95";

  const variants = {
    primary:
      "bg-brand-primary text-white hover:bg-blue-700 shadow-md hover:shadow-lg",
    outline:
      "border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white",
  };

  return (
    <button className={`${base} ${variants[variant]}`}>
      {children}
    </button>
  );
}
