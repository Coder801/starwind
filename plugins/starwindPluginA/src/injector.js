import App from "./App";
import React from "react";
import { createRoot } from "react-dom/client";

export const inject = (parentElementId) =>
  createRoot(document.getElementById(parentElementId)).render(<App />);
