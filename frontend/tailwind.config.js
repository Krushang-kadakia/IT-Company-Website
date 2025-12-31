/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // 👈 IMPORTANT
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#2563eb",
          secondary: "#4f46e5",
          dark: "#0f172a",
        },
      },
      fontFamily: {
        sans: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
