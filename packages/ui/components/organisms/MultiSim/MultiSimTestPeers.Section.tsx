import React, { useEffect, useMemo } from "react";
import styled from "styled-components";
import { useMultiSimPage, useTestPeers } from "hooks";
import { storageTestPeers as store } from "storage";
import { TestPeerItem, TestPeerItemEmpty } from "../../molecules";
import { Blockchain } from "types";

export const MultiSimTestPeersSection: React.FC<{ blockchain: Blockchain }> = ({
  blockchain,
}) => {
  const { currentPage } = useMultiSimPage();
  const { getPeersByBlockchain } = useTestPeers();

  const peers = getPeersByBlockchain(blockchain);
  const limit = useMemo(() => 10 - peers.length, [peers]);

  return (
    <Container>
      {peers.map((peer) => (
        <TestPeerItem key={peer.address} peer={peer} />
      ))}
      {limit > 0 && (
        <TestPeerItemEmpty
          limit={limit}
          blockchain={currentPage === "eth" ? "eth" : "sol"}
        />
      )}
    </Container>
  );
};

const Container = styled.section`
  display: grid;
  column-gap: 16px;
  row-gap: 20px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
`;
