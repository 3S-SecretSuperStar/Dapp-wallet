import React from "react";
import styled from "styled-components";
import { GlobalStyle } from "ui/styles/globalStyles";
import { PopupPage, usePopupPage } from "hooks/usePopupPage";
import {
  PopupIntroPage,
  PopupMainPage,
  PopupSetupPage,
  PopupWelcomePage,
} from "ui/components/templates";
import { BottomNav } from "ui/components/molecules";

const bottomNavDisplayingPages: PopupPage[] = [
  "main",
  "qrcode",
  "activity",
  "history",
  "profile",
];

export const PopupView = () => {
  const { currentPage } = usePopupPage();
  return (
    <>
      <Main>
        <GlobalStyle />
        {/* {currentPage === "intro" && <PopupIntroPage />}
        {currentPage === "welcome" && <PopupWelcomePage />}
        {currentPage === "setup" && <PopupSetupPage />}
        {currentPage === "main" && <PopupMainPage />} */}
        <PopupSetupPage />
      </Main>
      {/* {bottomNavDisplayingPages.includes(currentPage) && <BottomNav />} */}
    </>
  );
};

const Main = styled.main`
  width: 100%;
`;
