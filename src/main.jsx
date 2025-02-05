import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import Nav from "./Nav.jsx";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
      <BrowserRouter>
            <StrictMode>
                  <Nav />
                  <App />
            </StrictMode>
      </BrowserRouter>
);
