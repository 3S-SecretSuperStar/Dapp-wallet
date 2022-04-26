import React from "react";
import styled from "styled-components";
import { ColumnFlexContainer } from "../../atoms";
import { MainPageHeader } from "../../organisms/Main";
import { MainServiceListSection } from "../../organisms/Main/MainServiceListSection";

export const PopupMainPage = () => {
  return (
    <Container>
      <MainPageHeader />
      <MainServiceListSection />
    </Container>
  );
};

const Container = styled(ColumnFlexContainer)`
  && {
    padding: 0px 0px;
  }
`;
