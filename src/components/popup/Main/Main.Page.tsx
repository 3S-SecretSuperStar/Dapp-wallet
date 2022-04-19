import React from "react";
import styled from "styled-components";
import { TxHistorySection } from "./TxHistory.Section";
import { QuickMenuSection } from "./QuickMenu.Section";
import { MainInfoSection } from "./MainInfo.Section";

export const PopupMainPage = () => {
  return (
    <MainPageContainer>
      <MainInfoSection />
      <QuickMenuSection />
      <TxHistorySection />
    </MainPageContainer>
  );
};

const MainPageContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
  align-items: center;
  justify-items: start;
  padding: 52px 0px;
`;
