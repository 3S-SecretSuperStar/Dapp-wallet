import React from "react";
import { createRoot } from "react-dom/client";
import { PopupView } from "./view";
import "windi.css";
import { Buffer } from "buffer";

window["Buffer"] = Buffer;

const container = document.createElement("div");
document.body.appendChild(container);

const root = createRoot(container);
root.render(<PopupView />);
