import React from "react";
import styled from "styled-components";
import { NextButton, ColumnFlexContainer, GradientH4 } from "../../atoms";
import { TitleSection } from "../../molecules";
import { usePopupPage } from "hooks";
import { BRAND } from "utils/contants";

export const PopupWelcomePage = () => {
  const { setCurrentPage } = usePopupPage();
  return (
    <Container>
      <WelcomeImage src="/images/Welcome/welcome.svg" alt="welcome image" />
      <WelcomeTitleSection>
        <img src="/images/common/logo.svg" alt="Logo" />
        <h1>{BRAND}</h1>
        <GradientH4>Welcome back, we missed you.</GradientH4>
      </WelcomeTitleSection>
      <NextButton onClick={() => setCurrentPage("setup")}>
        Get Started
      </NextButton>
    </Container>
  );
};

const Container = styled(ColumnFlexContainer)`
  background-color: var(--dark);
  padding: 40px 24px;
`;

const WelcomeImage = styled.img`
  width: 80%;
  height: 250px;
  object-fit: contain;
  filter: drop-shadow(5px 0px var(--purple)) drop-shadow(6px 0px var(--orange))
    drop-shadow(7px 0px var(--green));
`;

const WelcomeTitleSection = styled(TitleSection)`
  margin-bottom: 32px;
  img {
    width: 64px;
    height: 64px;
    object-fit: contain;
  }
  h1 {
    color: var(--white);
  }
`;
