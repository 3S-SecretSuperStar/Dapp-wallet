import React, { useState } from "react";
import { usePopupPage, useSetupInfo, useSetupPage } from "hooks";
import { CryptoKeypair, CryptoWallet } from "types";
import { NextButton } from "../../atoms";
import {
  SetupAddressListSection,
  SetupChooseAddressPageTitleSection,
  SetupPageContainer,
  SetupPageTopButtonBar,
} from "../../organisms/Setup";
import { storageUserInfo } from "storage";

export const SetupChooseAddressPage = () => {
  const { setCurrentPage } = useSetupPage();
  const { setupInfo, setSetupInfo } = useSetupInfo();
  const { setCurrentPage: setPage } = usePopupPage();
  const { getUserInfo, setUserInfo } = storageUserInfo;
  const [keypair, setKeypair] = useState<CryptoKeypair | null>(null);

  const onClickNext = async () => {
    if (!keypair) return;
    if (setupInfo.revisit) {
      const userInfo = await getUserInfo();
      const wallets: CryptoWallet[] = [
        ...userInfo.wallets,
        {
          mnemonic: setupInfo.seedWords,
          blockchain: setupInfo.blockchain,
          accounts: [keypair],
          mainAccount: keypair,
        },
      ];
      await setUserInfo({ ...userInfo, wallets });
      setPage("main");
    } else {
      setSetupInfo({ ...setupInfo, keypair });
      setCurrentPage("password");
    }
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
