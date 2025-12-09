import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// ✅ Sonner toaster
import { Toaster } from "sonner";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />

    {/* Global toast container */}
    <Toaster
      position="top-right"
      richColors
      theme="dark"
      closeButton
      duration={3500}
    />
  </React.StrictMode>
);
