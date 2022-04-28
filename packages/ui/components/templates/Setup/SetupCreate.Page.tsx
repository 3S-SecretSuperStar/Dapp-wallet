import React, { useEffect, useState } from "react";
import { useSetupPage, useSetupInfo, usePopupPage } from "hooks";
import { NextButton } from "../../atoms";
import {
  SetupCreatePageTitleSection,
  SetupPageContainer,
  SetupPageTopButtonBar,
  SetupSeedWordSection,
} from "../../organisms/Setup";
import { generateMnemonic } from "utils/account";

export const SetupCreatePage = () => {
  const [seedWords, setSeedWords] = useState<string>("");
  const { setupInfo, setSetupInfo } = useSetupInfo();
  const { setCurrentPage } = useSetupPage();
  const { setCurrentPage: setPage } = usePopupPage();

  const createNewMnemonic = () => {
    const generatedMnemonic = generateMnemonic();
    setSeedWords(generatedMnemonic);
  };

  const onClickBack = () =>
    setupInfo.revisit ? setCurrentPage("first") : setCurrentPage("blockchain");

  const onClickNext = () => {
    setSetupInfo({ ...setupInfo, seedWords });
    setupInfo.revisit ? setPage("main") : setCurrentPage("password");
  };

  useEffect(() => {
    createNewMnemonic();
  }, []);

  return (
    <SetupPageContainer>
      <SetupPageTopButtonBar>
        <button onClick={onClickBack}>Back</button>
      </SetupPageTopButtonBar>
      <SetupCreatePageTitleSection />
      <SetupSeedWordSection readOnly value={seedWords} />
      <NextButton onClick={onClickNext}>Next</NextButton>
    </SetupPageContainer>
  );
};
