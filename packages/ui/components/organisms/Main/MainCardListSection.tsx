import { Blockchain } from "hooks/useSetupInfo";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { CryptoCard } from "../../molecules";

export const MainCardListSection = () => {
  const [blockchain, setBlockchain] = useState<Blockchain>("eth");
  return (
    <Container id="card-list" blockchain={blockchain}>
      <CryptoCard
        onClickLeft={() => {}}
        onClickRight={() => setBlockchain("eth")}
        blockchain="eth"
      />
      <CryptoCard
        onClickLeft={() => setBlockchain("sol")}
        onClickRight={() => {}}
        blockchain="sol"
      />
    </Container>
  );
};

const Container = styled.section<{ blockchain: Blockchain }>`
  position: relative;
  display: inline-flex;
  flex-direction: row;
  gap: 12px;
  align-content: center;
  justify-content: start;
  padding: 0px 20px;
  transform: ${(props) =>
    props.blockchain === "eth"
      ? "translate(0px, 0px)"
      : "translate(-240px, 0px)"};
  transition: transform 0.5s ease-in-out;
`;
