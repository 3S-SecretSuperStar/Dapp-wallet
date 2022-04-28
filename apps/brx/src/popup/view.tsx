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
import { storageUserInfo } from "../../../../packages/ui/node_modules/storage";

const bottomNavDisplayingPages: PopupPage[] = [
  "main",
  "qrcode",
  "activity",
  "history",
  "profile",
];

export const PopupView = () => {
  const { currentPage, setCurrentPage } = usePopupPage();
  const { getUserInfo } = storageUserInfo;

  useEffect(() => {
    getUserInfo().then((userInfo) => {
      userInfo.wallets.length < 1
        ? setCurrentPage("intro")
        : setCurrentPage("main");
    });
  }, []);

  return (
    <>
      <Main>
        <GlobalStyle />
        {currentPage === "intro" && <PopupIntroPage />}
        {currentPage === "welcome" && <PopupWelcomePage />}
        {currentPage === "setup" && <PopupSetupPage />}
        {currentPage === "main" && <PopupMainPage />}
      </Main>
      {bottomNavDisplayingPages.includes(currentPage) && <BottomNav />}
    </>
  );
};

const Main = styled.main`
  width: 100%;
`;
