import { NavLink, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(
    document.documentElement.classList.contains("dark")
  );
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    `block text-sm font-medium transition-colors hover:text-brand-primary ${isActive ? "text-brand-primary font-semibold" : ""
    }`;

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
        ? "bg-white/70 dark:bg-brand-dark/70 backdrop-blur-lg shadow-sm"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-xl font-bold text-brand-primary tracking-tight"
        >
          <img src="/logo.png" alt="TechNova Logo" className="h-8 w-auto" />
          TechNova
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8 text-gray-700 dark:text-gray-200">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/services" className={navLinkClass}>Services</NavLink>
          <NavLink to="/products" className={navLinkClass}>Products</NavLink>
          <NavLink to="/about" className={navLinkClass}>About</NavLink>
          <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="ml-4 p-2 rounded-full text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle Dark Mode"
          >
            {dark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 dark:text-gray-200 p-2"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="bg-white/95 dark:bg-brand-dark/95 backdrop-blur-md border-t border-gray-200 dark:border-gray-700 px-6 py-4 space-y-4 text-gray-700 dark:text-gray-200">
          <NavLink to="/" onClick={() => setOpen(false)} className={navLinkClass}>Home</NavLink>
          <NavLink to="/services" onClick={() => setOpen(false)} className={navLinkClass}>Services</NavLink>
          <NavLink to="/products" onClick={() => setOpen(false)} className={navLinkClass}>Products</NavLink>
          <NavLink to="/about" onClick={() => setOpen(false)} className={navLinkClass}>About</NavLink>
          <NavLink to="/contact" onClick={() => setOpen(false)} className={navLinkClass}>Contact</NavLink>

          {/* Mobile Dark Toggle */}
          <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
            <button
              onClick={() => {
                toggleDarkMode();
                setOpen(false);
              }}
              className="flex items-center space-x-2 text-sm font-medium hover:text-brand-primary"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
              <span>{dark ? "Light Mode" : "Dark Mode"}</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}