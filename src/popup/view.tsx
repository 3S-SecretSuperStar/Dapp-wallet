import React from "react";
import styled from "styled-components";
import { PopupMainPage } from "@components/popup/Main/Main.Page";
import { PopupTopBar } from "@components/popup/common/TopBar";
import { usePopupPage } from "@hooks/usePopupPage";
import { GlobalStyle } from "@styles/globalStyles";
import { PopupIntroPage } from "@pages/Intro";

export const PopupView = () => {
  const { currentPage } = usePopupPage();
  return (
    <>
      <GlobalStyle />
      <ViewContainer>
        {/* <PopupTopBar /> */}
        <Main>
          {currentPage === "intro" && <PopupIntroPage />}
          {currentPage === "main" && <PopupMainPage />}
        </Main>
      </ViewContainer>
    </>
  );
};

const ViewContainer = styled.div`
  width: 320px;
  height: 578px;
`;

const Main = styled.main`
  width: 100%;
`;
