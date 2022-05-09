import { useHigherModalPage, useInspectPeer } from "hooks";
import React from "react";
import styled from "styled-components";
import { TestWallet } from "types";
import { abbrevPublicKey } from "utils/account";
import { Avatar } from "../../atoms";

interface MultiSimSummarySectionProps {
  title: string;
  peers: TestWallet[];
}

export const MultiSimSummarySection: React.FC<MultiSimSummarySectionProps> = ({
  title,
  peers,
}) => {
  const { setOpen } = useHigherModalPage();
  const { setPeer } = useInspectPeer();

  const inspectPeer = (peer: TestWallet) => {
    setOpen(true);
    setPeer(peer);
  };

  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <PeerCount>{peers.length} test peers</PeerCount>
      </Header>
      <Avatars>
        {peers.map((peer) => (
          <AvatarButton
            key={abbrevPublicKey(peer.address)}
            onClick={() => inspectPeer(peer)}
            src={peer.avatar}
            alt={abbrevPublicKey(peer.address)}
            fg={peer.colorSet.fg}
          />
        ))}
      </Avatars>
    </Container>
  );
};

const Container = styled.section``;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Avatars = styled.div`
  margin-top: 16px;
  display: grid;
  column-gap: 8px;
  row-gap: 12px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;

const AvatarButton = styled(Avatar)`
  cursor: pointer;
`;

const Title = styled.h2``;

const PeerCount = styled.p`
  color: var(--darkGrey);
`;
