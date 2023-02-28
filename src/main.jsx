import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
document.documentElement.classList.add("scrool-smooth");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
