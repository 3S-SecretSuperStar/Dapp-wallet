import React, { useEffect, useState } from "react";
import { useSetupPage, useSetupInfo } from "hooks";
import { NextButton, GradientH3 } from "../../atoms";
import {
  SetupPageContainer,
  SetupPageTitleSection,
  SetupPageTopButtonBar,
  SetupSeedWordSection,
} from "../../organisms/Setup";
import { generateSeedWords } from "utils/account";

export const SetupCreatePage = () => {
  const [seedWords, setSeedWords] = useState<string>("");
  const { setupInfo, setSetupInfo } = useSetupInfo();
  const { setCurrentPage } = useSetupPage();

  const createNewMnemonic = () => {
    const generatedMnemonic = generateSeedWords();
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
