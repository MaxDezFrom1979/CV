import { Routes, Route } from "react-router-dom";
import Gallery from "./routes/gallery";
import Navbar from "./components/navbar";
import Home from "./routes/home";
import Experiences from "./routes/experiences";

export default function App() {
  return (
    <div className="font-['Handwritten'] text-center">
      <Navbar />
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/experiences" element={<Experiences />} />
        </Routes>
      </div>
    </div>
  );
}
