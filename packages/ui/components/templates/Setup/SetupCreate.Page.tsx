import React, { useEffect, useState } from "react";
import { useSetupPage, useSetupInfo, usePopupPage } from "hooks";
import { NextButton } from "../../atoms";
import {
  SetupCreatePageTitleSection,
  SetupPageContainer,
  SetupPageTopButtonBar,
  SetupSeedWordSection,
} from "../../organisms/Setup";
import { generateKeypair, generateMnemonic } from "utils/account";
import { storageUserInfo } from "storage";
import { CryptoWallet } from "types";

export const SetupCreatePage = () => {
  const [seedWords, setSeedWords] = useState<string>("");
  const { setupInfo, setSetupInfo } = useSetupInfo();
  const { setCurrentPage } = useSetupPage();
  const { setCurrentPage: setPage } = usePopupPage();
  const { getUserInfo, setUserInfo } = storageUserInfo;

  const createNewMnemonic = () => {
    const generatedMnemonic = generateMnemonic();
    setSeedWords(generatedMnemonic);
  };

  const onClickBack = () =>
    setupInfo.revisit ? setCurrentPage("first") : setCurrentPage("blockchain");

  const onClickNext = async () => {
    const keypair = generateKeypair(seedWords, setupInfo.blockchain);

    if (setupInfo.revisit) {
      const userInfo = await getUserInfo();
      const wallets: CryptoWallet[] = [
        ...userInfo.wallets,
        {
          mnemonic: seedWords,
          blockchain: setupInfo.blockchain,
          accounts: [keypair],
          mainAccount: keypair,
        },
      ];
      await setUserInfo({ ...userInfo, wallets });
      setPage("main");
    } else {
      setSetupInfo({ ...setupInfo, seedWords, keypair });
      setCurrentPage("password");
    }

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
