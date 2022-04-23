import React from "react";
import styled from "styled-components";
import { ColumnFlexContainer, IconButton } from "@components/common";
import { MainPageHeader } from "@components/Main";

export const PopupMainPage = () => {
  return (
    <Container>
      <MainPageHeader />
    </Container>
  );
};

const Container = styled(ColumnFlexContainer)`
  padding: 0px 0px;
`;
