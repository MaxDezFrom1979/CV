import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Gallery from "./routes/gallery";
import Navbar from "./components/navbar";
import Home from "./routes/home";
import Experiences from "./routes/experiences";
import { experiences } from "./data/experiences";
import { benevolat } from "./data/benevolat";
import { Footer } from "./components/footer";

export default function App() {
  const location = useLocation();

  return (
    <div className="font-['Handwritten'] text-center overflow-x-hidden h-screen w-screen">
      <Navbar />
      <div className="pt-16 transition-all">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route
            path="/experiences"
            element={<Experiences experienceList={experiences} />}
          />
          <Route
            path="/benevolat"
            element={<Experiences benevolat experienceList={benevolat} />}
          />
          <Route
            path="*"
            element={<div className="text-2xl">Page not found</div>}
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
