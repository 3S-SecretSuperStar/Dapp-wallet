import React, { useState } from "react";
import styled from "styled-components";
import { SetupPageContainer } from "@components/popup/Setup/SetupPageContainer";
import { SetupPageTopButtonBar } from "@components/popup/Setup/SetupPageTopButtonBar";
import { SetupPageTitleSection } from "@components/popup/Setup/SetupPageTitleSection";
import { Button, NextButton } from "@components/popup/common/Button";
import { GradientH3 } from "@components/popup/common/GradientText";
import { useSetupPage } from "@hooks/useSetupPage";
import { Blockchain, useSetupInfo } from "@hooks/useSetupInfo";
import { SetupFormSection } from "@components/popup/Setup/SetupFormSection";

export const SetupBlockchainPage = () => {
  const [blockchain, setBlockchain] = useState<Blockchain>("eth");
  const { setupInfo, setSetupInfo } = useSetupInfo();
  const { setCurrentPage } = useSetupPage();

  const onClickNext = () => {
    setSetupInfo({ ...setupInfo, blockchain });
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
          selected={blockchain === "eth"}
          onClick={() => setBlockchain("eth")}
        >
          Ethereum
        </SelectBlockchainButton>
        <SelectBlockchainButton
          selected={blockchain === "sol"}
          onClick={() => setBlockchain("sol")}
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
  background-color: ${(props) =>
    props.selected ? `var(--dark)` : "transparent"};
  color: ${(props) => (props.selected ? `var(--bright)` : `var(--dark)`)};
  border: 2px solid var(--dark);
  font-weight: 600;
`;
