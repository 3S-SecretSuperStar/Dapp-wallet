import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import ShadowRoot from "react-shadow/styled-components";
import Draggable from "react-draggable";
import styled from "styled-components";

const ShadowView = () => {
  const [expand, setExpand] = useState<boolean>(false);
  const toggleExpand = () => {
    setExpand(!expand);
  };

  return (
    <ShadowRoot.div>
      <Draggable>
        <Container>Hello Content Script</Container>
      </Draggable>
    </ShadowRoot.div>
  );
};

const Container = styled.div`
  position: fixed;
  right: 400px;
  bottom: 300px;
  z-index: 99999;

  button,
  button:focus {
    outline: none;
    border: 1px solid transparent;
    cursor: pointer;
  }

  button:active {
    outline: none;
    border: 1px solid grey;
    cursor: pointer;
  }
`;

const container = document.createElement("div");
document.body.appendChild(container);
const root = createRoot(container);
// root.render(<ShadowView />);
