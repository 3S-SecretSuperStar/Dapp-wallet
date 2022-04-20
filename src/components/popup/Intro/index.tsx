import styled from "styled-components";

export const IntroContainer = styled.div`
  position: absolute;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  div {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 320px;
    img {
      width: 100%;
      height: 300px;
      object-fit: cover;
    }
    button {
      position: absolute;
      top: 20px;
      right: 20px;
      font-weight: 700;
      font-size: 18px;
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

export const IntroNextButton = styled.button`
  background-color: var(--black);
  width: 64px;
  height: 64px;
  margin-top: 52px;
  border-radius: 20px;
  * {
    color: var(--bright);
  }
  svg {
    width: 21px;
    height: 21px;
  }
`;
