import React from "react";
import styled from "styled-components";
import { MainBalanceSection } from "./MainBalanceSection";

export const MainPageHeader = () => {
  return (
    <Container>
      <Greetings>
        <div>
          <p>Welcome</p>
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
`;

const Greetings = styled.header`
  padding: 32px 0px 16px 20px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: start;
  div {
    p {
      margin-bottom: 4px;
    }
  }
`;
