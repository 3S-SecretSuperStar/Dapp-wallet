import React, { useState } from "react";
import styled from "styled-components";
import { CryptoCard, CryptoCardEmpty } from "../../molecules";

export const MainCardListSection = () => {
  const [index, setIndex] = useState<number>(0);
  const swipePrev = () => {
    if (index === 0) return;
    setIndex(index - 1);
  };
  const swipeNext = () => {
    if (index === 2) return;
    setIndex(index + 1);
  };
  return (
    <Container>
      <LeftClickArea onClick={swipePrev} />
      <RightClickArea onClick={swipeNext} />
      <SwipeArea index={index}>
        <CryptoCard blockchain="eth" />
        <CryptoCard blockchain="sol" />
        <CryptoCardEmpty blockchain="eth" />
      </SwipeArea>
    </Container>
  );
};

const Container = styled.section`
  position: relative;
`;

const SwipeArea = styled.div<{ index: number }>`
  position: relative;
  display: inline-flex;
  flex-direction: row;
  gap: 12px;
  align-content: center;
  justify-content: start;
  padding: 0px 20px;
  transform: ${(props) => `translate(-${props.index * 240}px, 0px)`};
  transition: transform 0.5s ease-in-out;
`;

const LeftClickArea = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 52px;
  height: 100%;
  z-index: 50;
  cursor: pointer;
`;

const RightClickArea = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 52px;
  height: 100%;
  z-index: 50;
  cursor: pointer;
`;
