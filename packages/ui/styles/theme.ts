import { css } from "styled-components";

export const GlobalTheme = css`
  * {
    --bright: #ffffff;
    --dark: #0e0f35;
    --black: #000000;
    --primary: #6958d6;
    --strong: #f87c58;
    --warm: #fff3e8;
    --confirm: #98d8bd;
    --primary-gradient: linear-gradient(
      47deg,
      rgba(142, 126, 223, 1) 10%,
      rgba(248, 124, 88, 1) 100%
    );
  }
  // TODO: Add proper color theme for dark mode
`;
