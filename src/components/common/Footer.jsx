export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 text-sm">
      <div className="max-w-7xl mx-auto px-6 py-6 text-center">
        © {new Date().getFullYear()} TechNova. All rights reserved.
      </div>
    </footer>
  );
}
