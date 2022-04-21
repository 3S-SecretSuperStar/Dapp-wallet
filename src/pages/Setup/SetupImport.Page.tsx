import React, { useState } from "react";
import { NextButton, GradientH3 } from "@components/common";
import { useSetupPage } from "@hooks/useSetupPage";
import { useSetupInfo } from "@hooks/useSetupInfo";
import {
  SetupPageContainer,
  SetupPageTitleSection,
  SetupPageTopButtonBar,
  SetupSeedWordSection,
} from "@components/Setup";

export const SetupImportPage = () => {
  const [seedWords, setSeedWords] = useState<string>("");
  const { setCurrentPage } = useSetupPage();
  const { setupInfo, setSetupInfo } = useSetupInfo();

  const onClickNext = () => {
    // TODO: SHould verify if the mnemonic is valid
    setSetupInfo({ ...setupInfo, seedWords });
    setCurrentPage("password");
  };

  return (
    <SetupPageContainer>
      <SetupPageTopButtonBar>
        <button onClick={() => setCurrentPage("blockchain")}>Back</button>
      </SetupPageTopButtonBar>
      <SetupPageTitleSection>
        <img src="/images/common/logo.svg" alt="logo image" />
        <h1>
          Import your
          <br />
          Crypto Wallet
        </h1>
        <GradientH3>
          Type in your wallet seed words. It should be 12-word sequence.
        </GradientH3>
      </SetupPageTitleSection>
      <SetupSeedWordSection
        onChange={(e) => setSeedWords(e.target.value)}
        value={seedWords}
      />
      <NextButton onClick={onClickNext}>Next</NextButton>
    </SetupPageContainer>
  );
};
