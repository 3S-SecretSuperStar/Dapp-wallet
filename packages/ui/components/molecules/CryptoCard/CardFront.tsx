import { Blockchain } from "hooks/useSetupInfo";
import React, { useState } from "react";
import styled from "styled-components";
import { abbrevPublicKey } from "utils/account";
import { BigCircle, SmallCircle } from "./CardCommon";

export const CardFront: React.FC<{
  blockchain: Blockchain;
  publicKey: string;
}> = ({ blockchain, publicKey }) => {
  return (
    <Front blockchain={blockchain}>
      <p>{abbrevPublicKey(publicKey)}</p>
      <BalanceAmount>
        55,100<span>.00</span>
      </BalanceAmount>
      <BigCircle />
      <SmallCircle />
    </Front>
  );
};

const Front = styled.div<{ blockchain: Blockchain }>`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
  p {
    color: var(--bright);
    opacity: 0.7;
    margin: 16px 0px 8px 20px;
  }
  h1 {
    margin-left: 20px;
    font-size: 32px;
  }
  backface-visibility: hidden;
  background-color: ${(props) =>
    props.blockchain === "eth" ? "var(--primary)" : "var(--dark)"};
  border-radius: 20px;
  box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.2);
  overflow: hidden;
`;

const BalanceAmount = styled.h1`
  color: var(--bright);
  span {
    color: var(--bright);
    opacity: 50%;
    font-size: 16px;
    font-weight: 600;
  }
`;
