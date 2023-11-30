// index.js
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import Detalhes from "./detalhes";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/detalhes/:id" element={<Detalhes />} />
        <Route path="/" element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
