import { Blockchain } from "hooks/useSetupInfo";
import React, { useState } from "react";
import styled from "styled-components";
import { abbrevPublicKey } from "utils/account";

export const CryptoCard: React.FC<{
  blockchain?: Blockchain;
  onClickLeft: () => void;
  onClickRight: () => void;
}> = ({ blockchain = "eth", onClickRight, onClickLeft }) => {
  const [flip, setFlip] = useState<"front" | "back">("front");
  return (
    <Container>
      <Inner flip={flip}>
        <Front blockchain={blockchain}>
          <p>
            {abbrevPublicKey("E3134487NiedBNiQkpc9V2ZSeLMkmbxNgD2KkTHWdcCb")}
          </p>
          <BalanceAmount>
            55,100<span>.00</span>
          </BalanceAmount>
          <BigCircle />
          <SmallCircle />
        </Front>
        <Back blockchain={blockchain}>Hello</Back>
      </Inner>
      <LeftClickArea onClick={onClickLeft} />
      <RightClickArea onClick={onClickRight} />
      <CenterClickArea
        onClick={() => setFlip(flip === "front" ? "back" : "front")}
      />
    </Container>
  );
};

const Container = styled.div`
  min-width: 240px;
  min-height: 160px;
  perspective: 1000px;
  background-color: transparent;
`;

const Inner = styled.div<{ flip: "front" | "back" }>`
  position: relative;
  width: 100%;
  height: 100%;
  transform: ${(props) =>
    props.flip === "front" ? `rotateY(0deg)` : `rotateY(180deg)`};
  transform-style: preserve-3d;
  transition: transform 0.5s ease-in-out;
`;

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
`;

const Back = styled.div<{ blockchain: Blockchain }>`
  width: 100%;
  height: 100%;
  position: absolute;
  padding: 0px 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  background-color: ${(props) =>
    props.blockchain === "eth" ? "var(--primary)" : "var(--dark)"};
  border-radius: 20px;
`;

const LeftClickArea = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 52px;
  height: 100%;
  z-index: 1;
  cursor: pointer;
`;

const RightClickArea = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 52px;
  height: 100%;
  z-index: 1;
  cursor: pointer;
`;

const CenterClickArea = styled.div`
  position: absolute;
  left: 54px;
  top: 0;
  width: 130px;
  height: 100%;
  z-index: 1;
  cursor: pointer;
`;

const BigCircle = styled.div`
  position: absolute;
  bottom: -40px;
  right: -60px;
  width: 200px;
  height: 200px;
  border-radius: 100px;
  background-color: var(--bright);
  opacity: 0.1;
`;

const SmallCircle = styled.div`
  position: absolute;
  bottom: -60px;
  right: -40px;
  width: 160px;
  height: 160px;
  border-radius: 100px;
  background-color: var(--bright);
  opacity: 0.07;
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
