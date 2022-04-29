import styled from "styled-components";

export const BigCircle = styled.div`
  position: absolute;
  bottom: -40px;
  right: -60px;
  width: 200px;
  height: 200px;
  border-radius: 100px;
  background-color: var(--white);
  opacity: 0.1;
  z-index: 1;
`;

export const SmallCircle = styled.div`
  position: absolute;
  bottom: -60px;
  right: -40px;
  width: 160px;
  height: 160px;
  border-radius: 100px;
  background-color: var(--white);
  opacity: 0.07;
  z-index: 1;
`;
