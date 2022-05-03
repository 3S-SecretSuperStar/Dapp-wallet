import React, { useMemo } from "react";
import styled from "styled-components";
import { abbrevPublicKey } from "utils/account";
import { Avatar, Body3, Button } from "../../atoms";
import { TestPeerItemFrame } from "./TestPeerItemFrame";
import { TrashIcon } from "@heroicons/react/solid";
import { storageTestPeers as store } from "storage";
import {
  useEthTestPeers,
  useHigherModalPage,
  useInspectPeer,
  useSolTestPeers,
} from "hooks";
import { Blockchain, TestWallet } from "types";

interface TestPeerItemProps {
  peer: TestWallet;
  blockchain: Blockchain;
}

export const TestPeerItem: React.FC<TestPeerItemProps> = ({
  peer,
  blockchain,
}) => {
  const { peers: ethPeers, deletePeer: deleteEthPeer } = useEthTestPeers();
  const { peers: solPeers, deletePeer: deleteSolPeer } = useSolTestPeers();
  const { setOpen } = useHigherModalPage();
  const { setPeer } = useInspectPeer();

  const peers = useMemo(() => {
    switch (blockchain) {
      case "eth":
        return ethPeers;
      case "sol":
        return solPeers;
    }
  }, [blockchain, ethPeers, solPeers]);

  const deletePeerItem = async () => {
    const filteredPeers = peers.filter((p) => p.publicKey !== peer.publicKey);

    switch (blockchain) {
      case "eth":
        deleteEthPeer(peer);
        await store.setEthTestPeers(filteredPeers);
        return;
      case "sol":
        deleteSolPeer(peer);
        await store.setSolTestPeers(filteredPeers);
        return;
    }
  };

  const inspectPeer = () => {
    setOpen(true);
    setPeer({ peerInfo: peer, blockchain });
  };

  return (
    <Container bg={peer.colorSet.bg}>
      <Avatar
        size="regular"
        src={peer.avatar}
        alt={abbrevPublicKey(peer.publicKey)}
        fg={peer.colorSet.fg}
      />
      <TextContainer>
        <h4>{peer.nickname}</h4>
        <Body3>{abbrevPublicKey(peer.publicKey)}</Body3>
      </TextContainer>
      <ButtonContainer>
        <MoreButton size="small" fg={peer.colorSet.fg} onClick={inspectPeer}>
          More
        </MoreButton>
        <DeleteButton bgColor={peer.colorSet.fg} onClick={deletePeerItem}>
          <TrashIcon />
        </DeleteButton>
      </ButtonContainer>
    </Container>
  );
};

const Container = styled(TestPeerItemFrame)<{ bg: string }>`
  background-color: ${(props) => props.bg};
`;

const TextContainer = styled.div``;

const MoreButton = styled(Button)<{ fg: string }>`
  && {
    background-color: ${(props) => props.fg};
    background-image: ${(props) => props.fg};
  }
`;

const DeleteButton = styled.button<{ bgColor: string }>`
  height: 28px;
  border-radius: 16px;
  svg {
    width: 18px;
    height: 18px;
    fill: ${(props) => props.bgColor};
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
