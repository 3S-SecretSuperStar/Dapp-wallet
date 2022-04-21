import React from "react";
import styled from "styled-components";
import { NextButton } from "@components/popup/common/Button";
import { TitleSection } from "@components/popup/common/TitleSection";
import { usePopupPage } from "@hooks/usePopupPage";
import { BRAND } from "@utils/contants";
import { ColumnFlexContainer } from "@components/popup/common/ColumnFlexContainer";
import { GradientH3 } from "@components/popup/common/GradientText";

export const PopupWelcomePage = () => {
  const { setCurrentPage } = usePopupPage();
  return (
    <Container>
      <WelcomeImage src="/images/Welcome/welcome.svg" alt="welcome image" />
      <WelcomeTitleSection>
        <img src="/images/Welcome/logo.svg" alt="Pengwyn Logo" />
        <h1>
          Sign in to
          <br />
          {BRAND}
        </h1>
        <GradientH3>Welcome back, you've been missed!</GradientH3>
      </WelcomeTitleSection>
      <NextButton onClick={() => setCurrentPage("setup")}>
        Get Started
      </NextButton>
    </Container>
  );
};

const Container = styled(ColumnFlexContainer)`
  background-color: var(--dark);
`;

const WelcomeImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: contain;
`;

const WelcomeTitleSection = styled(TitleSection)`
  margin-bottom: 32px;
  img {
    width: 32px;
    height: 32px;
    object-fit: contain;
  }
  h1 {
    color: var(--bright);
  }
`;
