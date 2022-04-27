import React, { useState } from "react";
import { useSetupInfo, useSetupPage } from "hooks";
import { CryptoKeypair } from "types";
import { NextButton } from "../../atoms";
import {
  SetupAddressListSection,
  SetupChooseAddressPageTitleSection,
  SetupPageContainer,
  SetupPageTopButtonBar,
} from "../../organisms/Setup";

export const SetupChooseAddressPage = () => {
  const { setCurrentPage } = useSetupPage();
  const { setupInfo, setSetupInfo } = useSetupInfo();
  const [keypair, setKeypair] = useState<CryptoKeypair | null>(null);
  const onClickNext = () => {
    if (!keypair) return;
    setSetupInfo({ ...setupInfo, keypair });
    setCurrentPage("password");
  };
  return (
    <SetupPageContainer>
      <SetupPageTopButtonBar>
        <button onClick={() => setCurrentPage("blockchain")}>Back</button>
      </SetupPageTopButtonBar>
      <SetupChooseAddressPageTitleSection />
      <SetupAddressListSection setKeypair={setKeypair} />
      <NextButton onClick={onClickNext}>Next</NextButton>
    </SetupPageContainer>
  );
};
