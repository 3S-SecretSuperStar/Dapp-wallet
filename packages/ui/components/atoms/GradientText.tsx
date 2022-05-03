import styled, { css } from "styled-components";

export const gradientTextStyle = css`
  background: linear-gradient(45deg, var(--gradient-cosmos));
  background-clip: text;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
  -webkit-text-fill-color: transparent;
  display: inline-block;
`;

export const GradientH4 = styled.h4`
  ${gradientTextStyle}
`;
