import { ColumnFlexContainer } from "../common";
import styled from "styled-components";

export const IntroPageContainer = styled(ColumnFlexContainer)`
  div {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 280px;
    img {
      width: 80%;
      height: 300px;
      object-fit: contain;
    }
    button {
      position: absolute;
      top: 20px;
      right: 20px;
      font-weight: 600;
      font-size: 16px;
    }
  }
  h2 {
    margin-top: 21px;
    text-align: center;
    margin-top: 4px;
  }
  p {
    margin-top: 21px;
    width: 90%;
    text-align: center;
  }
`;
