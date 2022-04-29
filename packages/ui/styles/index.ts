import { createGlobalStyle } from "styled-components";
import { Fonts } from "./fonts.styles";
import { UIPreflight } from "./preflight.styles";
import { TextGuide } from "./typography.styles";
import { Colors } from "./colors.styles";

export const GlobalStyle = createGlobalStyle`
  ${Colors}
  ${UIPreflight}
  ${TextGuide}
  ${Fonts}
  * {
    color: var(--black);
    margin: 0;
    --popup-width: 320px;
    --popup-height: 580px;
  }
  html {
    background-color: var(--white);
    ::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
    width: var(--popup-width);
    height: var(--popup-height);
  }
  input, textarea {
    height: 40px;
    background: linear-gradient(var(--white), var(--white)) padding-box, 
                linear-gradient(45deg, var(--gradient-cosmos)) border-box;
    border-radius: 16px;
    border: 2px solid transparent;
    opacity: 0.2;
    transition: opacity 0.2s ease-in-out;
    :focus {
      opacity: 1;
    }
  }
`;
