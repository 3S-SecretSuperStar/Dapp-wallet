import React from "react";
import styled from "styled-components";
import { useSetupPage, useSetupInfo } from "hooks";
import { Button } from "../../atoms";

export const SetupFirstPageChoiceSection = () => {
  const { setCurrentPage } = useSetupPage();
  const { setupInfo, setSetupInfo } = useSetupInfo();

  const onClickNext = (setupType: "import" | "create") => {
    setSetupInfo({ ...setupInfo, setupType });
    setCurrentPage("blockchain");
  };

  return (
    <ButtonContainer>
      <ImportWalletButton onClick={() => onClickNext("import")}>
        <p>Import Wallet</p>
      </ImportWalletButton>
      <CreateNewWalletButton onClick={() => onClickNext("create")}>
        <p>Create New Wallet</p>
      </CreateNewWalletButton>
    </ButtonContainer>
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
