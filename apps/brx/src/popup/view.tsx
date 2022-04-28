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
import { storageUserInfo } from "storage";
import { useModal } from "hooks";
import { ModalPageContainer } from "ui/components/atoms";

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
  const { isModalOpen } = useModal();

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
      {isModalOpen && <ModalPageContainer />}
    </>
  );
};

const Main = styled.main`
  width: 100%;
`;
