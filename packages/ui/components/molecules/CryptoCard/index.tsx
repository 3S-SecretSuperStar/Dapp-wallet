import React, { useState } from "react";
import styled from "styled-components";
import { DUMMY_PUB_KEY } from "utils/contants";
import { CardFront } from "./CardFront";
import { Blockchain } from "types";
import { CardBack } from "./CardBack";

export const CryptoCard: React.FC<{
  blockchain?: Blockchain;
  onClickLeft: () => void;
  onClickRight: () => void;
  publicKey?: string;
}> = ({
  blockchain = "eth",
  onClickRight,
  onClickLeft,
  publicKey = DUMMY_PUB_KEY,
}) => {
  const [flip, setFlip] = useState<"front" | "back">("front");
  const toggleFlip = () => setFlip(flip === "front" ? "back" : "front");
  return (
    <Container>
      <Inner flip={flip}>
        <CardFront blockchain={blockchain} publicKey={publicKey} />
        <CardBack
          blockchain={blockchain}
          publicKey={publicKey}
          toggleFlip={toggleFlip}
        />
      </Inner>
      <LeftClickArea onClick={onClickLeft} />
      <RightClickArea onClick={onClickRight} />
      <CenterClickArea onClick={toggleFlip} flip={flip} />
    </Container>
  );
};

const Container = styled.div`
  min-width: 240px;
  min-height: 160px;
  perspective: 1000px;
  background-color: transparent;
  overflow: none;
  z-index: 10;
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

const CenterClickArea = styled.div<{ flip: "front" | "back" }>`
  position: absolute;
  left: 54px;
  top: 0;
  width: 130px;
  height: 100%;
  z-index: ${(props) => (props.flip === "front" ? "1" : "-10")};
  cursor: pointer;
`;
