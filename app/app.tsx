import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Gallery from "./routes/gallery";
import Navbar from "./components/navbar";
import Home from "./routes/home";
import Experiences from "./routes/experiences";
import { experiences } from "./data/experiences";
import { benevolat } from "./data/benevolat";
import { Footer } from "./components/footer";
import Game from "./routes/game";

export default function App() {
  const location = useLocation();

  return (
    <div className="font-['Handwritten'] text-center overflow-x-hidden flex flex-col min-h-screen">
      <Navbar />
      <div className="pt-12 flex-1">
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
          <Route path="/game" element={<Game />} />
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
