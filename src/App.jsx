import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import BackgroundWrapper from "./components/common/BackgroundWrapper";

function App() {
  return (
    <BrowserRouter>
      <BackgroundWrapper>
        <div className="relative min-h-screen">
          {/* App Content */}
          <Navbar />

          <main className="relative z-10">
            <AppRoutes />
          </main>

          <Footer />
        </div>
      </BackgroundWrapper>
    </BrowserRouter>
  );
}

export default App;
