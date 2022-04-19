import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    color: white;
    margin: 0;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: #0b0742;
    ::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  h1 {
    font-weight: 600;
    font-size: 32px;
  }
  h2 {
    font-weight: 500;
    font-size: 20px;
  }
  h3 {
    font-weight: 400;
    font-size: 16px;
  }
  h4 {
    font-weight: 300;
    font-size: medium;
  }
  p {
    font-weight: 300;
    font-size: small;
  }
  button {
    background-color: transparent;
    cursor: pointer;
    border: none;
    :hover, :focus, :active {
      outline: none;
    }
  }
  input {
    background-color: transparent;
    border: none;
    :hover, :focus, :active {
      outline: none;
    }
  }
`;
