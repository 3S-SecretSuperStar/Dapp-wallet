import { MinusIcon, XIcon } from "@heroicons/react/outline";
import React from "react";
import styled, { keyframes } from "styled-components";

const ExpandedContainer = styled.div`
  background-color: #eeeeee;
  border-radius: 20px;
  overflow: hidden;
`;

const TopBar = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
  background-color: #138086;
  svg {
    width: 20px;
    height: 20px;
    margin-left: 20px;
    cursor: pointer;
    color: white;
  }
`;

const CurrentBalance = styled.h1`
  font-weight: 400;
  font-size: 50px;
  color: black;
  span {
    font-weight: 200;
    font-size: 30px;
  }
`;

const Network = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  p {
    font-size: 20px;
    font-weight: 200;
  }
`;

export const FloatingExpanded: React.FC<{ toggleExpand: () => void }> = ({
  toggleExpand,
}) => {
  return (
    <ExpandedContainer>
      <TopBar>
        <MinusIcon />
        <XIcon onClick={toggleExpand} />
      </TopBar>
      <CurrentBalance>
        202.11 <span>SOL</span>
      </CurrentBalance>
      <Network>
        <p>Mainnet</p>
        <p>Testnet</p>
        <p>Devnet</p>
        <p>Localhost</p>
      </Network>
    </ExpandedContainer>
  );
};
