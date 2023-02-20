import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const rootElement = document.getElementById("root");

// create a root instance with the createRoot function
const root = createRoot(rootElement);

// render the app using the render function on the root
root.render(<App />);
