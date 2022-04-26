import {
  DownloadIcon,
  RefreshIcon,
  UploadIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import { Blockchain } from "hooks/useSetupInfo";
import React, { useState } from "react";
import styled from "styled-components";
import { GradientH3, IconButton } from "../../atoms";

export const MainBalanceSection = () => {
  const [blockchain, setBlockchain] = useState<Blockchain>("eth");
  return (
    <Container>
      <Balance blockchain={blockchain}>
        <h3>Your {blockchain === "eth" ? "ETH" : "SOL"} balance</h3>
        <BalanceAmount>
          55,100<span>.00</span>
        </BalanceAmount>
      </Balance>
      <Utilities>
        <UtilIconButton
          onClick={() => setBlockchain(blockchain === "eth" ? "sol" : "eth")}
          size="small"
        >
          <RefreshIcon style={{ fill: "#6F87EE" }} />
        </UtilIconButton>
        <UtilIconButton size="small">
          <UploadIcon style={{ fill: "#F76F50" }} />
        </UtilIconButton>
        <UtilIconButton size="small">
          <DownloadIcon style={{ fill: "#5E50CC" }} />
        </UtilIconButton>
        <UtilIconButton size="small">
          <ViewGridIcon style={{ fill: "#EC6188" }} />
        </UtilIconButton>
      </Utilities>
    </Container>
  );
};

const Container = styled.section`
  position: relative;
  height: 170px;
  padding: 0px 20px;
`;

const Balance = styled.div<{ blockchain: Blockchain }>`
  top: 0px;
  z-index: -1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
  height: 150px;
  background-color: ${(props) =>
    props.blockchain === "eth" ? "var(--dark)" : "var(--primary)"};
  border-radius: 20px;
  h3 {
    color: var(--bright);
    opacity: 0.7;
    margin: 20px 0px 12px 20px;
  }
  h1 {
    margin-left: 20px;
    font-size: 32px;
  }
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

const Utilities = styled.div`
  position: absolute;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background-color: var(--confirm);
  width: auto;
  height: 54px;
  border-radius: 20px;
  padding: 0px 12px;
  left: 50%;
  transform: translate(-50%, 0%);
  bottom: 0px;
`;

const UtilIconButton = styled(IconButton)`
  background-color: var(--bright);
  svg {
    stroke-width: 4px;
  }
`;
