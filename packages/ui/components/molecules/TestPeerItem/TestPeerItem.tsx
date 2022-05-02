import React from "react";
import styled from "styled-components";
import { abbrevPublicKey } from "utils/account";
import { Avatar, Body3, Button } from "../../atoms";
import { TestPeerItemFrame } from "./TestPeerItemFrame";
import { TrashIcon } from "@heroicons/react/solid";
import { storageTestClusters as store } from "storage";
import { useMultiSimPage } from "hooks";

interface TestPeerItemProps {
  avatar: string;
  nickname: string;
  publicKey: string;
  colorSet: { bg: string; fg: string };
}

export const TestPeerItem: React.FC<TestPeerItemProps> = ({
  avatar,
  nickname,
  publicKey,
  colorSet,
}) => {
  const { currentPage } = useMultiSimPage();
  const deletePeer = async () => {
    if (currentPage === "eth") {
      const peers = await store.getEthTestPeers();
      const filteredPeers = peers.filter(
        (peer) => peer.publicKey !== publicKey
      );
      await store.setEthTestPeers(filteredPeers);
    } else if (currentPage === "sol") {
      const peers = await store.getSolTestPeers();
      const filteredPeers = peers.filter(
        (peer) => peer.publicKey !== publicKey
      );
      await store.setSolTestPeers(filteredPeers);
    } else {
      return;
    }
  };
  return (
    <Container bg={colorSet.bg}>
      <Avatar
        size="regular"
        src={avatar}
        alt={abbrevPublicKey(publicKey)}
        fg={colorSet.fg}
      />
      <TextContainer>
        <h4>{nickname}</h4>
        <Body3>{abbrevPublicKey(publicKey)}</Body3>
      </TextContainer>
      <ButtonContainer>
        <MoreButton size="small" fg={colorSet.fg}>
          More
        </MoreButton>
        <DeleteButton bgColor={colorSet.fg} onClick={deletePeer}>
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
