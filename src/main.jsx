import { StrictMode, lazy } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import "./index.css";
import Remodeling from "./Services/Remodeling.jsx";
const App = lazy(() => import("./App.jsx"));
const About = lazy(() => import("./About.jsx"));
const Contact = lazy(() => import("./Contact.jsx"));

createRoot(document.getElementById("root")).render(
      <BrowserRouter>
            <StrictMode>
                  <Nav />
                  <Routes>
                        <Route path="/" element={<App />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/services/remodeling" element={<Remodeling />} />
                        <Route path="/services/cleaning" element={<Contact />} />
                        <Route path="/services/roofing" element={<Contact />} />
                        <Route path="/services/tiles" element={<Contact />} />
                  </Routes>
                  <Footer />
            </StrictMode>
      </BrowserRouter>
);
