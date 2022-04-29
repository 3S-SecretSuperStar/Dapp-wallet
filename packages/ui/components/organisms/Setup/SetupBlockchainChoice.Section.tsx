import styled from "styled-components";
import React from "react";
import { SetupFormSection } from "./SetupForm.Section";
import { useSetupInfo } from "hooks";
import { Button } from "../../atoms";

export const SetupBlockchainChoiceSection = () => {
  const { setupInfo, setSetupInfo } = useSetupInfo();
  return (
    <Container>
      <ChoiceButton
        selected={setupInfo.blockchain === "eth"}
        onClick={() => setSetupInfo({ ...setupInfo, blockchain: "eth" })}
      >
        Ethereum
      </ChoiceButton>
      <ChoiceButton
        selected={setupInfo.blockchain === "sol"}
        onClick={() => setSetupInfo({ ...setupInfo, blockchain: "sol" })}
      >
        Solana
      </ChoiceButton>
    </Container>
  );
};

const Container = styled(SetupFormSection)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

const ChoiceButton = styled(Button)<{ selected: boolean }>`
  && {
    background-color: ${(props) =>
      props.selected ? `var(--dark)` : "transparent"};
    color: ${(props) => (props.selected ? `var(--white)` : `var(--dark)`)};
  }
  border: 2px solid var(--dark);
  font-weight: 600;
`;
