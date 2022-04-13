import React from "react";
import { createRoot } from "react-dom/client";
import "windi.css";

const App = () => {
  return (
    <div className="p-6 bg-indigo-100 w-[300px] h-[400px]">
      <h1 className="text-3xl font-semibold mb-6">Hello from popup page!</h1>
      <p className="text-xl">Fill the contents</p>
    </div>
  );
};

const container = document.createElement("div");
document.body.appendChild(container);

const root = createRoot(container);
root.render(<App />);
