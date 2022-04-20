import { Button } from "@components/popup/common/Button";
import { usePopupPage } from "@hooks/usePopupPage";
import React from "react";
import styled from "styled-components";

export const PopupWelcomePage = () => {
  const { setCurrentPage } = usePopupPage();
  return (
    <Container>
      <WelcomeImage src="/images/Welcome/welcome.svg" alt="welcome image" />
      <WelcomeTitle>
        <img src="/images/Welcome/logo.svg" alt="Pengwyn Logo" />
        <h1>
          Sign in to
          <br />
          Pengwyn
        </h1>
        <h3 className="gradient-text">Welcome back, you've been missed!</h3>
      </WelcomeTitle>
      <Button onClick={() => setCurrentPage("setup")}>Get Started</Button>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  display: inline-flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  height: 100%;
  background-color: var(--dark);
  padding: 40px 16px;
`;

const WelcomeImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: contain;
`;

const WelcomeTitle = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
  gap: 16px;
  margin-bottom: 32px;
  width: 100%;
  img {
    width: 32px;
    height: 32px;
  }
  h1 {
    color: var(--bright);
    text-align: left;
  }
  h3 {
    text-align: left;
  }
`;
