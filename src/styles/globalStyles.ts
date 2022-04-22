import { createGlobalStyle } from "styled-components";
import { FontFace } from "./fontFace";
import { UIPreflight } from "./preflight";
import { TextGuide } from "./textGuide";
import { GlobalTheme } from "./theme";

export const GlobalStyle = createGlobalStyle`
  ${GlobalTheme}
  ${UIPreflight}
  ${TextGuide}
  ${FontFace}
  * {
    color: var(--black);
    margin: 0;
  }
  body {
    background-color: var(--bright);
    ::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
    width: 320px;
    height: 580px;
  }
  input, textarea {
    height: 40px;
    background: linear-gradient(var(--bright), var(--bright)) padding-box, var(--primary-gradient) border-box;
    border-radius: 16px;
    border: 2px solid transparent;
    opacity: 0.2;
    :focus {
      opacity: 1;
    }
  }
`;
