import { Blockchain } from "types";
import React from "react";
import styled from "styled-components";
import { abbrevPublicKey } from "utils/account";
import { BigCircle, SmallCircle } from "./CryptoCardCommon";

export const CryptoCardFront: React.FC<{
  blockchain: Blockchain;
  publicKey: string;
}> = ({ blockchain, publicKey }) => {
  return (
    <Front blockchain={blockchain}>
      <FrontHeader>
        <button>{abbrevPublicKey(publicKey)}</button>
        <p>{blockchain === "eth" ? "ETH" : "SOL"}</p>
      </FrontHeader>
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
  backface-visibility: hidden;
  background-color: ${(props) =>
    props.blockchain === "eth" ? "var(--purple)" : "var(--dark)"};
  border-radius: 20px;
  box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.2);
  overflow: hidden;
`;

const FrontHeader = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 12px 0px 8px 12px;
  width: 85%;
  button {
    color: var(--white);
    opacity: 0.7;
    transition: opacity 0.4s linear;
    :hover {
      opacity: 1;
    }
  }
  p {
    color: var(--white);
    opacity: 0.7;
    font-style: italic;
  }
`;

const BalanceAmount = styled.h1`
  color: var(--white);
  font-size: 32px;
  margin-left: 12px;
  span {
    color: var(--white);
    opacity: 50%;
    font-size: 16px;
    font-weight: 600;
  }
`;
