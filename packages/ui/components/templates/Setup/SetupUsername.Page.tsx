import React from "react";
import styled from "styled-components";
import { usePopupPage, useSetupInfo, useSetupPage } from "hooks";
import { Button } from "../../atoms";
import {
  SetupPageContainer,
  SetupPageTopButtonBar,
  SetupUsernamePageInputSection,
  SetupUsernamePageTitleSection,
} from "../../organisms/Setup";
import { storageUserInfo } from "storage";
import { CryptoWallet } from "types";
import { BRAND } from "utils/contants";

export const SetupUsernamePage = () => {
  const { setCurrentPage } = useSetupPage();
  const { setCurrentPage: setPage } = usePopupPage();
  const { setupInfo } = useSetupInfo();
  const { setUserInfo } = storageUserInfo;

  const onClickBack = () => setCurrentPage("password");

  const onClickStart = async () => {
    const username = setupInfo.username;
    const password = setupInfo.password;
    const wallets: CryptoWallet[] = [
      {
        mnemonic: setupInfo.seedWords,
        blockchain: setupInfo.blockchain,
        accounts: [setupInfo.keypair],
        mainAccount: setupInfo.keypair,
      },
    ];
    await setUserInfo({
      username,
      password,
      wallets,
    });
    setPage("main");
  };

  return (
    <SetupPageContainer>
      <SetupPageTopButtonBar>
        <button onClick={onClickBack}>Back</button>
      </SetupPageTopButtonBar>
      <SetupUsernamePageTitleSection />
      <SetupUsernamePageInputSection />
      <StartButton onClick={onClickStart}>Start {BRAND}</StartButton>
    </SetupPageContainer>
  );
};

const StartButton = styled(Button)`
  background-image: linear-gradient(45deg, var(--gradient-cosmos));
  * {
    color: var(--white);
  }
`;
