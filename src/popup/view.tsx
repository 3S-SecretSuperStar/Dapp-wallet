import React from "react";
import { PopupMainPage } from "../components/popup/Main/Main.Page";
import { PopupTopBar } from "../components/popup/common/TopBar";
import { usePopupPage } from "../hooks/usePopupPage";
import { PopupCreateWalletPage } from "../components/popup/CreateWallet/CreateWallet.Page";
import styled from "styled-components";
import { GlobalStyle } from "../styles/globalStyles";

export const PopupView = () => {
  const { currentPage } = usePopupPage();
  return (
    <>
      <GlobalStyle />
      <ViewContainer>
        <PopupTopBar />
        <Main>
          {currentPage === "main" && <PopupMainPage />}
          {currentPage === "createWallet" && <PopupCreateWalletPage />}
        </Main>
      </ViewContainer>
    </>
  );
};

const ViewContainer = styled.div`
  width: 360px;
  height: 480px;
`;

const Main = styled.main`
  width: 100%;
  margin-top: 48px;
`;
