import React, { useMemo, useState } from "react";
import { useSetupPage, useSetupInfo } from "hooks";
import { NextButton } from "../../atoms";
import {
  SetupImportPageTitleSection,
  SetupPageContainer,
  SetupPageTopButtonBar,
  SetupSeedWordSection,
} from "../../organisms/Setup";
import { isMnemonicValid } from "utils/account";

export const SetupImportPage = () => {
  const [seedWords, setSeedWords] = useState<string>("");
  const { setCurrentPage } = useSetupPage();
  const { setupInfo, setSetupInfo } = useSetupInfo();
  const isValid = useMemo(() => isMnemonicValid(seedWords), [seedWords]);

  const onClickNext = () => {
    if (!isValid) {
      return;
    }
    setSetupInfo({ ...setupInfo, seedWords });
    setCurrentPage("choose");
  };

  return (
    <SetupPageContainer>
      <SetupPageTopButtonBar>
        <button onClick={() => setCurrentPage("blockchain")}>Back</button>
      </SetupPageTopButtonBar>
      <SetupImportPageTitleSection />
      <SetupSeedWordSection
        onChange={(e) => setSeedWords(e.target.value)}
        value={seedWords}
      />
      <NextButton disabled={!isValid} onClick={onClickNext}>
        Next
      </NextButton>
    </SetupPageContainer>
  );
};
