import React from "react";
import { createRoot } from "react-dom/client";

const Options = () => {
  return (
    <>
      <head>
        <title>FlowTx | Options</title>
      </head>
      <div>
        <h1>This is an options page</h1>
      </div>
    </>
  );
};

const container = document.createElement("div");
document.body.appendChild(container);

const root = createRoot(container);
root.render(<Options />);
