import React, { useEffect } from "react";
import styled from "styled-components";
import { GlobalStyle } from "ui/styles";
import {
  PopupMainPage,
  PopupModalPage,
  PopupSetupPage,
  PopupWelcomePage,
} from "ui/components/templates";
import { BottomNav } from "ui/components/molecules";
import { storageUserInfo } from "storage";
import { useModalPage, usePopupPage } from "hooks";
import { PopupPage } from "hooks/src/usePopupPage";

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
  const { modalPage } = useModalPage();

  useEffect(() => {
    getUserInfo().then((userInfo) => {
      userInfo.wallets.length < 1
        ? setCurrentPage("welcome")
        : setCurrentPage("main");
    });
  }, []);

  return (
    <>
      <Main>
        <GlobalStyle />
        {currentPage === "welcome" && <PopupWelcomePage />}
        {currentPage === "setup" && <PopupSetupPage />}
        {currentPage === "main" && <PopupMainPage />}
      </Main>
      {bottomNavDisplayingPages.includes(currentPage) && <BottomNav />}
      {modalPage.isOpen && <PopupModalPage />}
    </>
  );
};

const Main = styled.main`
  width: 100%;
`;
