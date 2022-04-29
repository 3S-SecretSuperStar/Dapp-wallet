import { usePopupPage, useSetupInfo, useSetupPage } from "hooks";
import React from "react";
import styled from "styled-components";
import { Blockchain } from "types";
import { Button } from "../../atoms";
import { CryptoCardFrame } from "./CryptoCardCommon";

export const CryptoCardEmpty: React.FC<{
  blockchain: Blockchain;
}> = ({ blockchain }) => {
  const { setupInfo, setSetupInfo } = useSetupInfo();
  const { setCurrentPage: setSetupPage } = useSetupPage();
  const { setCurrentPage: setPage } = usePopupPage();

  const cryptoName = blockchain === "eth" ? "ETH" : "SOL";

  const onClickAddAccount = () => {
    setSetupInfo({ ...setupInfo, blockchain, revisit: true });
    setSetupPage("first");
    setPage("setup");
  };

  return (
    <Container>
      <NoAccount>No {cryptoName} account found.</NoAccount>
      <AddButton onClick={onClickAddAccount}>Add {cryptoName}</AddButton>
    </Container>
  );
};

const Container = styled(CryptoCardFrame)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  border: 3px dashed var(--lightGrey);
  gap: 24px;
  && {
    min-height: 0px;
  }
`;

const NoAccount = styled.h4`
  color: var(--darkGrey);
`;

const AddButton = styled(Button)`
  && {
    background-color: var(--green);
    color: var(--white);
  }
`;
