import React, { useEffect, useState } from "react";
import { SetupPageContainer } from "@components/popup/Setup/SetupPageContainer";
import { SetupPageTopButtonBar } from "@components/popup/Setup/SetupPageTopButtonBar";
import { SetupPageTitleSection } from "@components/popup/Setup/SetupPageTitleSection";
import { NextButton } from "@components/popup/common/Button";
import { GradientH3 } from "@components/popup/common/GradientText";
import { generateMnemonic } from "bip39";
import { useSetupPage } from "@hooks/useSetupPage";
import { useSetupInfo } from "@hooks/useSetupInfo";
import { SetupSeedWordSection } from "@components/popup/Setup/SetupSeedWordSection";

export const SetupCreatePage = () => {
  const [seedWords, setSeedWords] = useState<string>("");
  const { setupInfo, setSetupInfo } = useSetupInfo();
  const { setCurrentPage } = useSetupPage();

  const createNewMnemonic = () => {
    const generatedMnemonic = generateMnemonic();
    setSeedWords(generatedMnemonic);
  };

  const onClickNext = () => {
    setSetupInfo({ ...setupInfo, seedWords });
    setCurrentPage("password");
  };

  useEffect(() => {
    createNewMnemonic();
  }, []);

  return (
    <SetupPageContainer>
      <SetupPageTopButtonBar>
        <button onClick={() => setCurrentPage("blockchain")}>Back</button>
      </SetupPageTopButtonBar>
      <SetupPageTitleSection>
        <img src="/images/common/logo.svg" alt="logo image" />
        <h1>
          Create your
          <br />
          crypto wallet
        </h1>
        <GradientH3>
          Copy the seed words somewhere safe. Never show anyone!
        </GradientH3>
      </SetupPageTitleSection>
      <SetupSeedWordSection readOnly value={seedWords} />
      <NextButton onClick={onClickNext}>Next</NextButton>
    </SetupPageContainer>
  );
};
