import { css } from "styled-components";

const Solid = css`
  --purple: #6e54c7;
  --orange: #f87c58;
  --green: #98d8bd;
  --pink: #ef6d94;
  --lightBlue: #7a90f4;
  --beige: #fff3e8;
`;

const Gradient = css`
  --gradient-cosmos: #7679e6 1.7%, #b383cc 43.52%, #f16990 100.98%;
  --gradient-purple: #b6abff 0%, #4933d9 100%;
  --gradient-orange: #ffe092 0%, #ff6b00 100%;
  --gradient-cyan: #b6f5ee 0%, #2ec4b1 100%;
  --gradient-red: #ffb7a3 0%, #f13e32 100%;
  --gradient-blue: #b3c0ff 0%, #5572f5 100%;
  --gradient-pink: #fdcbce 0%, #ef2f3a 100%;
`;

const Neutral = css`
  --black: #05061b;
  --darkGrey: #9da4b7;
  --lightGrey: #f4f5f6;
  --white: #ffffff;
  --dark: #0e0f35;
`;

export const Colors = css`
  * {
    ${Solid}
    ${Gradient}
    ${Neutral}
  }
`;
