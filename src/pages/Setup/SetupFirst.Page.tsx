import React from "react";
import styled from "styled-components";
import { SetupPageContainer } from "@components/popup/Setup/SetupPageContainer";
import { SetupPageTopButtonBar } from "@components/popup/Setup/SetupPageTopButtonBar";
import { SetupPageTitleSection } from "@components/popup/Setup/SetupPageTitleSection";
import { Button } from "@components/popup/common/Button";
import { DownloadIcon, PlusIcon } from "@heroicons/react/outline";
import { GradientH3 } from "@components/popup/common/GradientText";

export const SetupFirstPage = () => {
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
        <ImportWalletButton>
          <p>Import Wallet</p>
        </ImportWalletButton>
        <CreateNewWalletButton>
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
