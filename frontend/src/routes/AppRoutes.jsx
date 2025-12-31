import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Products from "../pages/Products";
import About from "../pages/About";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import Admin from "../pages/Admin";

export default function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {["/", "/services", "/products", "/about", "/contact", "/admin", "/login"].map((path) => (
          <Route
            key={path}
            path={path}
            element={
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {{
                  "/": <Home />,
                  "/services": <Services />,
                  "/products": <Products />,
                  "/about": <About />,
                  "/contact": <Contact />,
                  "/admin": <Admin />,
                  "/login": <Login />,
                }[path]}
              </motion.div>
            }
          />
        ))}
        {/* Catch-all Route for 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}
