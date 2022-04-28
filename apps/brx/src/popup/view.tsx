import React, { useEffect } from "react";
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
  const { currentPage, setCurrentPage } = usePopupPage();
  useEffect(() => {
    setCurrentPage("welcome");
  }, []);
  return (
    <>
      <Main>
        <GlobalStyle />
        {/* {currentPage === "intro" && <PopupIntroPage />} */}
        {currentPage === "welcome" && <PopupWelcomePage />}
        {currentPage === "setup" && <PopupSetupPage />}
        {currentPage === "main" && <PopupMainPage />}
      </Main>
      {bottomNavDisplayingPages.includes(currentPage) && <BottomNav />}
      {/* <BottomNav /> */}
    </>
  );
};

const Main = styled.main`
  width: 100%;
`;
