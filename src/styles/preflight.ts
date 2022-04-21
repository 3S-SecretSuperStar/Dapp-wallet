import { css } from "styled-components";

export const UIPreflight = css`
  button {
    background-color: transparent;
    cursor: pointer;
    border: none;
    :hover,
    :focus,
    :active {
      outline: none;
    }
  }
  input,
  textarea {
    background-color: transparent;
    border: none;
    :hover,
    :focus,
    :active {
      outline: none;
    }
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
`;
