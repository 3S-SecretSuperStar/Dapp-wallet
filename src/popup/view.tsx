import React from "react";
import styled from "styled-components";
import { GlobalStyle } from "@styles/globalStyles";
import { usePopupPage } from "@hooks/usePopupPage";
import { PopupMainPage } from "@components/popup/Main/Main.Page";
import { PopupTopBar } from "@components/popup/common/TopBar";
import { PopupIntroPage } from "@pages/Intro";
import { PopupWelcomePage } from "@pages/Welcome";
import { PopupSetupPage } from "@pages/Setup";

export const PopupView = () => {
  const { currentPage } = usePopupPage();
  return (
    <>
      <GlobalStyle />
      <ViewContainer>
        <Main>
          {/* {currentPage === "intro" && <PopupIntroPage />}
          {currentPage === "main" && <PopupMainPage />}
          {currentPage === "welcome" && <PopupWelcomePage />}
          {currentPage === "setup" && <PopupSetupPage />} */}
          <PopupSetupPage />
        </Main>
      </ViewContainer>
    </>
  );
};

const ViewContainer = styled.div`
  width: 268px;
  height: 580px;
`;

const Main = styled.main`
  width: 100%;
`;
