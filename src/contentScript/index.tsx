import React from "react";
import { createRoot } from "react-dom/client";
import "windi.css";
import { View } from "./view";

const container = document.createElement("div");
document.body.appendChild(container);
const root = createRoot(container);
root.render(<View />);
