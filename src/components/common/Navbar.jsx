import { NavLink, Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(
    document.documentElement.classList.contains("dark")
  );

  function toggleDarkMode() {
    const html = document.documentElement;
    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDark(false);
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDark(true);
    }
  }

  const navLinkClass = ({ isActive }) =>
    `block hover:text-brand-primary ${
      isActive ? "text-brand-primary font-semibold" : ""
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-brand-dark border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-bold text-brand-primary"
        >
          TechNova
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-700 dark:text-gray-200">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/services" className={navLinkClass}>Services</NavLink>
          <NavLink to="/products" className={navLinkClass}>Products</NavLink>
          <NavLink to="/about" className={navLinkClass}>About</NavLink>
          <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="ml-4 px-3 py-1 rounded-md border text-xs
                       border-gray-300 dark:border-gray-600
                       hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            {dark ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 dark:text-gray-200"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300
        ${open ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="bg-white dark:bg-brand-dark border-t border-gray-200 dark:border-gray-700 px-6 py-4 space-y-4 text-sm font-medium text-gray-700 dark:text-gray-200">
          <NavLink to="/" onClick={() => setOpen(false)} className={navLinkClass}>Home</NavLink>
          <NavLink to="/services" onClick={() => setOpen(false)} className={navLinkClass}>Services</NavLink>
          <NavLink to="/products" onClick={() => setOpen(false)} className={navLinkClass}>Products</NavLink>
          <NavLink to="/about" onClick={() => setOpen(false)} className={navLinkClass}>About</NavLink>
          <NavLink to="/contact" onClick={() => setOpen(false)} className={navLinkClass}>Contact</NavLink>

          {/* Mobile Dark Toggle */}
          <button
            onClick={() => {
              toggleDarkMode();
              setOpen(false);
            }}
            className="mt-2 px-3 py-2 rounded-md border text-xs w-fit
                       border-gray-300 dark:border-gray-600
                       hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>
      </div>
    </nav>
  );
}