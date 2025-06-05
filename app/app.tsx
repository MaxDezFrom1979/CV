import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Gallery from "./routes/gallery";
import Navbar from "./components/navbar";
import Home from "./routes/home";
import Experiences from "./routes/experiences";
import Benevolat from "./routes/benevolat";
import PageTransition from "./components/page-transition";

export default function App() {
  const location = useLocation();

  return (
    <div className="font-['Handwritten'] text-center overflow-x-hidden h-screen w-screen">
      <Navbar />
      <div className="pt-16 transition-all">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageTransition>
                  <Home />
                </PageTransition>
              }
            />
            <Route
              path="/gallery"
              element={
                <PageTransition>
                  <Gallery />
                </PageTransition>
              }
            />
            <Route
              path="/experiences"
              element={
                <PageTransition>
                  <Experiences />
                </PageTransition>
              }
            />
            <Route
              path="/benevolat"
              element={
                <PageTransition>
                  <Benevolat />
                </PageTransition>
              }
            />
            <Route
              path="*"
              element={
                <PageTransition>
                  <div className="text-2xl">Page not found</div>
                </PageTransition>
              }
            />
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  );
}
