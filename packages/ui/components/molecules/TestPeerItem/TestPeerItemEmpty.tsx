import { useTestPeers } from "hooks";
import React, { useMemo, useState } from "react";
import { storageTestPeers as store } from "storage";
import styled from "styled-components";
import { Blockchain } from "types";
import { createRandomWallet } from "utils/multisim";
import { AvatarEmpty, Body3, Button } from "../../atoms";
import { TestPeerItemFrame } from "./TestPeerItemFrame";

export const TestPeerItemEmpty: React.FC<{
  limit: number;
  blockchain: Blockchain;
}> = ({ limit, blockchain }) => {
  const { peers, addPeer } = useTestPeers();

  const addNewPeer = async () => {
    if (limit === 0) return;
    const newPeer = await createRandomWallet(blockchain);
    store.setTestPeers([...peers, newPeer]);
    addPeer(newPeer);
  };

  return (
    <Container>
      <AvatarEmpty />
      <TextContainer>
        <h4>Add Peer</h4>
        <Body3>{limit} left to add</Body3>
      </TextContainer>
      <AddButton size="small" onClick={addNewPeer}>
        Add
      </AddButton>
    </Container>
  );
};

const Container = styled(TestPeerItemFrame)`
  border: 2px dashed var(--lightGrey);
`;

const TextContainer = styled.div`
  * {
    color: var(--darkGrey);
  }
`;

const AddButton = styled(Button)`
  && {
    background-color: var(--darkGrey);
    color: var(--white);
  }
`;
