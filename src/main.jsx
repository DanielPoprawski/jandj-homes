import { StrictMode, lazy } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Nav from "./Components/Nav.jsx";
import Footer from "./Components/Footer.jsx";
import "./index.css";
import Remodeling from "./Services/Remodeling.jsx";
import Cleaning from "./Services/Cleaning.jsx";
const App = lazy(() => import("./App.jsx"));
const About = lazy(() => import("./About.jsx"));
const Contact = lazy(() => import("./Contact.jsx"));
const Roofing = lazy(() => import("./Services/Roofing.jsx"));
const Tiles = lazy(() => import("./Services/Tiles.jsx"));

createRoot(document.getElementById("root")).render(
      <BrowserRouter>
            <StrictMode>
                  <Nav />
                  <Routes>
                        <Route path="/" element={<App />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/services/remodeling" element={<Remodeling />} />
                        <Route path="/services/cleaning" element={<Cleaning />} />
                        <Route path="/services/roofing" element={<Roofing />} />
                        <Route path="/services/tiles" element={<Tiles />} />
                  </Routes>
                  <Footer />
            </StrictMode>
      </BrowserRouter>
);
