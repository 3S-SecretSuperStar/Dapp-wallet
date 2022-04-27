import React from "react";
import { useSetupPage, useSetupInfo } from "hooks";
import { NextButton } from "../../atoms";
import {
  SetupBlockchainChoiceSection,
  SetupBlockchainPageTitleSection,
  SetupPageContainer,
  SetupPageTopButtonBar,
} from "../../organisms/Setup";

export const SetupBlockchainPage = () => {
  const { setupInfo } = useSetupInfo();
  const { setCurrentPage } = useSetupPage();

  const onClickNext = () => {
    setCurrentPage(setupInfo.setupType === "import" ? "import" : "create");
  };

  return (
    <SetupPageContainer>
      <SetupPageTopButtonBar>
        <button onClick={() => setCurrentPage("first")}>Back</button>
      </SetupPageTopButtonBar>
      <SetupBlockchainPageTitleSection />
      <SetupBlockchainChoiceSection />
      <NextButton onClick={onClickNext}>Next</NextButton>
    </SetupPageContainer>
  );
};
