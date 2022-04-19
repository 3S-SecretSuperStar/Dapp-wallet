import React from "react";
import styled from "styled-components";
import {
  CurrencyDollarIcon,
  RefreshIcon,
  ShareIcon,
} from "@heroicons/react/outline";

export const QuickMenuSection = () => {
  return (
    <QuickMenuSectionContainer>
      <QuickMenuItem>
        <CurrencyDollarIcon />
        <p>Buy</p>
      </QuickMenuItem>
      <QuickMenuItem>
        <ShareIcon />
        <p>Send</p>
      </QuickMenuItem>
      <QuickMenuItem>
        <RefreshIcon />
        <p>Swap</p>
      </QuickMenuItem>
    </QuickMenuSectionContainer>
  );
};

const QuickMenuSectionContainer = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 66%;
`;

const QuickMenuItem = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  svg {
    width: 32px;
    height: 32px;
  }
  p {
    margin: 8px 0px;
    text-align: center;
  }
`;
