import React, { useEffect, useState } from "react";
import styled from "styled-components";
import * as Bip39 from "bip39";
import { deriveNewAccountFromMnemonic } from "../../../utils/account";
import { setUserAccounts, setUserMnemonic } from "../../../utils/storage";
import { usePopupPage } from "../../../hooks/usePopupPage";
import { RefreshIcon } from "@heroicons/react/outline";

export const PopupCreateWalletPage = () => {
  const [mnemonic, setMnemonic] = useState<string>("No Mnemonic");
  const [password, setPassword] = useState<string>("");
  const { setCurrentPage } = usePopupPage();
  const createNewMnemonic = () => {
    const generatedMnemonic = Bip39.generateMnemonic();
    setMnemonic(generatedMnemonic);
  };
  const createAccount = async () => {
    const account = deriveNewAccountFromMnemonic(0, mnemonic, password);
    try {
      await setUserMnemonic(mnemonic);
      await setUserAccounts([account]);
      setCurrentPage("main");
    } catch (error) {
      console.log(error);
    }
  };
  // Create mnemonic when visit this page
  useEffect(() => {
    createNewMnemonic();
  }, []);
  return (
    <Container>
      <h1>Create Wallet</h1>
      <h2>Seed Phrase</h2>
      <MnemonicDisplay>
        <div>
          <p>{mnemonic}</p>
        </div>
        <RefreshIcon onClick={createNewMnemonic} />
      </MnemonicDisplay>
      <h2>Password (Optional)</h2>
      <PasswordInput
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <ConfirmButton onClick={() => createAccount()}>Create</ConfirmButton>
    </Container>
  );
};

const Container = styled.div`
  padding: 32px 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
  h1 {
    margin-bottom: 16px;
  }
  h2 {
    margin-bottom: 8px;
    text-align: left;
  }
`;

const MnemonicDisplay = styled.div`
  position: relative;
  margin-bottom: 12px;
  div {
    background-color: rgba(255, 255, 255, 0.2);
    border: 2px solid rgba(255, 255, 255, 0.5);
    border-radius: 8px;
    padding: 18px;
    height: 150px;
    :hover {
      background-color: rgba(255, 255, 255, 0.3);
      border: 2px solid rgba(255, 255, 255, 0.6);
    }
    p {
      font-size: 18px;
      font-weight: 300;
      font-style: italic;
    }
  }
  svg {
    position: absolute;
    top: 4px;
    right: 4px;
    width: 20px;
    height: 20px;
    opacity: 0.7;
    cursor: pointer;
    :hover,
    :focus {
      opacity: 1;
    }
  }
`;

const PasswordInput = styled.input`
  background-color: transparent;
  border-bottom: 2px solid rgba(255, 255, 255, 0.5);
  padding-bottom: 4px;
  font-size: 20px;
  font-weight: 300;
  opacity: 0.7;
  :focus {
    outline: none;
    opacity: 1;
  }
`;

const ConfirmButton = styled.button`
  background-color: white;
  margin-top: 24px;
  color: black;
  border-radius: 8px;
  padding: 6px 8px;
  font-size: 18px;
  font-weight: 500;
  opacity: 0.7;
  :hover {
    opacity: 1;
  }
`;
