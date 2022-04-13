import React from "react";
import { createRoot } from "react-dom/client";
import "windi.css";

const Options = () => {
  return (
    <>
      <head>
        <title>FlowTx | Options</title>
      </head>
      <div className="bg-indigo-900 text-light-50 p-12 min-h-screen">
        <h1 className="font-medium text-4xl">This is an options page</h1>
        <p>fill the contents here.</p>
      </div>
    </>
  );
};

const container = document.createElement("div");
document.body.appendChild(container);

const root = createRoot(container);
root.render(<Options />);
