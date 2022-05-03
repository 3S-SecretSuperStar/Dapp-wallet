import { useEthTestPeers, useSolTestPeers } from "hooks";
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
  const [loading, setLoading] = useState<boolean>(false);

  const { peers: ethPeers, addPeer: addEthPeer } = useEthTestPeers();
  const { peers: solPeers, addPeer: addSolPeer } = useSolTestPeers();

  const peers = useMemo(() => {
    switch (blockchain) {
      case "eth":
        return ethPeers;
      case "sol":
        return solPeers;
    }
  }, [blockchain, ethPeers, solPeers]);

  const addPeer = async () => {
    if (limit === 0) return;

    setLoading(true);

    const newPeer = await createRandomWallet(blockchain);
    switch (blockchain) {
      case "eth":
        addEthPeer(newPeer);
        await store.setEthTestPeers([...peers, newPeer]);
        break;
      case "sol":
        addSolPeer(newPeer);
        await store.setSolTestPeers([...peers, newPeer]);
        break;
    }

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
