import React from "react";
import styled from "styled-components";
import { ColumnFlexContainer, IconButton } from "@components/common";
import { CashIcon } from "@heroicons/react/outline";

export const PopupMainPage = () => {
  return (
    <ColumnFlexContainer>
      <CashIconButton>
        <CashIcon />
      </CashIconButton>
      <CashIconButton size="small">
        <CashIcon />
      </CashIconButton>
    </ColumnFlexContainer>
  );
};

const CashIconButton = styled(IconButton)`
  background-color: var(--primary);
  svg {
    * {
      color: var(--bright);
    }
  }
`;
