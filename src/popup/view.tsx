import React from "react";
import styled from "styled-components";
import { GlobalStyle } from "@styles/globalStyles";
import { usePopupPage } from "@hooks/usePopupPage";
import { PopupMainPage } from "@components/Main/Main.Page";
import { PopupIntroPage } from "@pages/Intro";
import { PopupWelcomePage } from "@pages/Welcome";
import { PopupSetupPage } from "@pages/Setup";

export const PopupView = () => {
  const { currentPage } = usePopupPage();
  return (
    <>
      <GlobalStyle />
      <Main>
        {/* {currentPage === "intro" && <PopupIntroPage />}
          {currentPage === "main" && <PopupMainPage />}
          {currentPage === "welcome" && <PopupWelcomePage />}
          {currentPage === "setup" && <PopupSetupPage />} */}
        <PopupSetupPage />
      </Main>
    </>
  );
};

const Main = styled.main`
  width: 100%;
`;
