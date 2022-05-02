import React, { useState } from "react";
import { storageTestClusters as store } from "storage";
import styled from "styled-components";
import { Blockchain, TestWallet } from "types";
import { createRandomWallet, randomAvatar } from "utils/multisim";
import { AvatarEmpty, Body3, Button } from "../../atoms";
import { TestPeerItemFrame } from "./TestPeerItemFrame";

export const TestPeerItemEmpty: React.FC<{
  limit: number;
  peers: TestWallet[];
  setPeers: (peer: TestWallet[]) => void;
  blockchain: Blockchain;
}> = ({ limit, peers, setPeers, blockchain }) => {
  const [loading, setLoading] = useState<boolean>(false);

  const addPeer = async () => {
    if (limit === 0) return;
    setLoading(true);
    const wallet = await createRandomWallet(blockchain);
    const newPeers = [...peers, wallet];
    if (blockchain === "eth") {
      await store.setEthTestPeers(newPeers);
    } else if (blockchain === "sol") {
      await store.setSolTestPeers(newPeers);
    } else {
    }
    setPeers(newPeers);
    setLoading(false);
  };

  return (
    <Container loading={loading}>
      <AvatarEmpty />
      <TextContainer>
        <h4>Add Peer</h4>
        <Body3>{limit} left to add</Body3>
      </TextContainer>
      <AddButton size="small" onClick={addPeer}>
        {loading ? "Creating..." : "Add"}
      </AddButton>
    </Container>
  );
};

const Container = styled(TestPeerItemFrame)<{ loading: boolean }>`
  border: 2px dashed var(--lightGrey);
  opacity: ${(props) => (props.loading ? "0.5" : "1")};
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
