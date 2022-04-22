import React from "react";
import styled from "styled-components";
import { GlobalStyle } from "@styles/globalStyles";
import { usePopupPage } from "@hooks/usePopupPage";
import {
  PopupIntroPage,
  PopupMainPage,
  PopupSetupPage,
  PopupWelcomePage,
} from "@pages";

export const PopupView = () => {
  const { currentPage } = usePopupPage();
  return (
    <>
      <GlobalStyle />
      <Main>
        {/* {currentPage === "intro" && <PopupIntroPage />}
        {currentPage === "welcome" && <PopupWelcomePage />}
        {currentPage === "setup" && <PopupSetupPage />} */}
        <PopupMainPage />
      </Main>
    </>
  );
};

const Main = styled.main`
  width: 100%;
`;
