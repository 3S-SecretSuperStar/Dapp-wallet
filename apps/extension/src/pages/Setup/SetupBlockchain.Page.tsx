import React from "react";
import styled from "styled-components";
import { useSetupPage, useSetupInfo } from "hooks";
import {
  SetupFormSection,
  SetupPageContainer,
  SetupPageTitleSection,
  SetupPageTopButtonBar,
} from "ui/components/Setup";
import { Button, NextButton, GradientH3 } from "ui/components/common";

export const SetupBlockchainPage = () => {
  const { setupInfo, setSetupInfo } = useSetupInfo();
  const { setCurrentPage } = useSetupPage();

  const onClickNext = () => {
    setCurrentPage(setupInfo.setupType === "import" ? "import" : "create");
  };

  return (
    <SetupPageContainer>
      <SetupPageTopButtonBar>
        <button onClick={() => setCurrentPage("first")}>Back</button>
      </SetupPageTopButtonBar>
      <SetupPageTitleSection>
        <img src="/images/common/logo.svg" alt="logo image" />
        <h1>
          Select
          <br />
          your blockchain
        </h1>
        <GradientH3>
          More blockchains will be supported in near future!
        </GradientH3>
      </SetupPageTitleSection>
      <SelectBlockchainSection>
        <SelectBlockchainButton
          selected={setupInfo.blockchain === "eth"}
          onClick={() => setSetupInfo({ ...setupInfo, blockchain: "eth" })}
        >
          Ethereum
        </SelectBlockchainButton>
        <SelectBlockchainButton
          selected={setupInfo.blockchain === "sol"}
          onClick={() => setSetupInfo({ ...setupInfo, blockchain: "sol" })}
        >
          Solana
        </SelectBlockchainButton>
      </SelectBlockchainSection>
      <NextButton onClick={onClickNext}>Next</NextButton>
    </SetupPageContainer>
  );
};

const SelectBlockchainSection = styled(SetupFormSection)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

const SelectBlockchainButton = styled(Button)<{ selected: boolean }>`
  && {
    background-color: ${(props) =>
      props.selected ? `var(--dark)` : "transparent"};
    color: ${(props) => (props.selected ? `var(--bright)` : `var(--dark)`)};
  }
  border: 2px solid var(--dark);
  font-weight: 600;
`;
