import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./global.css";

const root = createRoot(document.getElementById("root")!);
root.render(
  <StrictMode>
    <App />
    <span className="w-2xl bg-red text-red">test</span>
  </StrictMode>
);