import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { abbrevPublicKey } from "../../../utils/account";
import { getUserAccounts, HDAccount } from "../../../utils/storage";

export const MainInfoSection = () => {
  const [userAccount, setUserAccount] = useState<HDAccount>({
    index: -1,
    publicKey: "-",
  });
  useEffect(() => {
    getUserAccounts().then((accounts) => {
      accounts.length === 0
        ? setUserAccount({ index: -1, publicKey: "-" })
        : setUserAccount(accounts[0]);
    });
  }, []);
  return (
    <MainInfoSectionContainer>
      <PublicKey>
        <img src="/solana-sol-logo.svg" alt="sol logo" />
        <h4>{abbrevPublicKey(userAccount.publicKey)}</h4>
      </PublicKey>
      <Balance>
        {userAccount.publicKey === "-" ? "-" : "202.12"}
        <span>SOL</span>
      </Balance>
    </MainInfoSectionContainer>
  );
};

const MainInfoSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
`;

const PublicKey = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 50%;
  margin-bottom: 12px;
  opacity: 0.7;
  :hover {
    opacity: 1;
  }
  img {
    width: 20px;
    height: 20px;
    object-fit: contain;
  }
`;

const Balance = styled.h1`
  font-size: 48px;
  font-weight: 700;
  span {
    margin-left: 8px;
    font-size: 24px;
    font-weight: 500;
  }
`;
