import React from "react";
import styled from "styled-components";
import { Button, GradientH3 } from "@components/common";
import { useSetupPage } from "@hooks/useSetupPage";
import { useSetupInfo } from "@hooks/useSetupInfo";
import {
  SetupPageContainer,
  SetupPageTitleSection,
  SetupPageTopButtonBar,
} from "@components/Setup";

export const SetupFirstPage = () => {
  const { setCurrentPage } = useSetupPage();
  const { setupInfo, setSetupInfo } = useSetupInfo();

  const onClickNext = (setupType: "import" | "create") => {
    setSetupInfo({ ...setupInfo, setupType });
    setCurrentPage("blockchain");
  };

  return (
    <SetupPageContainer>
      <SetupPageTopButtonBar>
        <button>Help</button>
      </SetupPageTopButtonBar>
      <SetupPageTitleSection>
        <img src="/images/common/logo.svg" alt="logo image" />
        <h1>
          Setup your
          <br />
          crypto wallet
        </h1>
        <GradientH3>Import existing wallet, or create a new one!</GradientH3>
      </SetupPageTitleSection>
      <ButtonContainer>
        <ImportWalletButton onClick={() => onClickNext("import")}>
          <p>Import Wallet</p>
        </ImportWalletButton>
        <CreateNewWalletButton onClick={() => onClickNext("create")}>
          <p>Create New Wallet</p>
        </CreateNewWalletButton>
      </ButtonContainer>
    </SetupPageContainer>
  );
};

const ButtonContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 12px;
  margin-top: 80px;
`;

const ImportWalletButton = styled(Button)`
  background-color: var(--dark);
  width: 100%;
`;

const CreateNewWalletButton = styled(Button)`
  width: 100%;
`;
