import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { ThemeProvider } from "./context/ThemeContext";
import { BrowserRouter } from "./router/BrowserRouter";


import "./index.css";

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init()

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
