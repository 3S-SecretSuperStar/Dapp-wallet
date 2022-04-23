import React from "react";
import styled from "styled-components";
import { ColumnFlexContainer } from "../../atoms";
import { MainPageHeader } from "../../organisms/Main";

export const PopupMainPage = () => {
  return (
    <Container>
      <MainPageHeader />
    </Container>
  );
};

const Container = styled(ColumnFlexContainer)`
  && {
    padding: 0px 0px;
  }
`;
