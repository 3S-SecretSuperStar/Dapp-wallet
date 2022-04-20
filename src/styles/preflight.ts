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
  input {
    background-color: transparent;
    border: none;
    :hover,
    :focus,
    :active {
      outline: none;
    }
  }
`;
