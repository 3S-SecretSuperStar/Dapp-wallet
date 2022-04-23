import { SunIcon } from "@heroicons/react/solid";
import React from "react";
import styled from "styled-components";
import { MainBalanceSection } from "./MainBalanceSection";

export const MainPageHeader = () => {
  return (
    <Container>
      <Greetings>
        <SunIcon />
        <div>
          <p>Good morning,</p>
          <h2>Hoon Wee</h2>
        </div>
      </Greetings>
      <MainBalanceSection />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-image: linear-gradient(
    180deg,
    rgba(255, 181, 0, 0.4) 10%,
    rgba(255, 255, 255, 0) 60%
  );
`;
const Greetings = styled.header`
  padding: 32px 0px 32px 20px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: start;
  svg {
    width: 20px;
    height: 20px;
    fill: var(--strong);
  }
  div {
    margin-left: 4px;
    p {
      margin-bottom: 8px;
    }
  }
`;
