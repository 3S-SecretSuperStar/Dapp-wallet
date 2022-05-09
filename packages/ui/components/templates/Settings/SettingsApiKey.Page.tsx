import React, { useState } from "react";
import { storageEthApiProviderKey as store } from "storage";
import styled from "styled-components";
import { EthApiProviderKey } from "types";
import { Button, ColumnFlexContainer, TextInput } from "../../atoms";

export const SettingsApiKeyPage = () => {
  const [ethApiKey, setEthApiKey] = useState<EthApiProviderKey>({
    provider: "infura",
    apiKey: "",
  });
  const saveEthApiKey = async () => {
    await store.setEthApiProviderKey(ethApiKey);
  };
  return (
    <ColumnFlexContainer>
      <h2>API Key</h2>
      <Section>
        <h3>Ethereum</h3>
        <TextInput
          onChange={(e) =>
            setEthApiKey({ provider: "infura", apiKey: e.target.value })
          }
          value={ethApiKey.apiKey}
        />
        <Button onClick={saveEthApiKey}>Save</Button>
      </Section>
    </ColumnFlexContainer>
  );
};

const Section = styled.section`
  width: 100%;
  margin-top: 24px;
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
  gap: 12px;

  input {
    width: 100%;
  }
`;
