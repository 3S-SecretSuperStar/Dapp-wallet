import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { useMultiSimPage } from "hooks";
import { storageTestClusters as store } from "storage";
import { TestWallet } from "types";
import { TestPeerItem, TestPeerItemEmpty } from "../../molecules";

export const MultiSimTestPeersSection = () => {
  const { currentPage } = useMultiSimPage();
  const [peers, setPeers] = useState<TestWallet[]>([]);

  const limit = useMemo(() => 10 - peers.length, [peers]);

  useEffect(() => {
    if (currentPage === "eth") {
      store.getEthTestPeers().then((ethPeers) => {
        setPeers(ethPeers);
      });
    } else if (currentPage === "sol") {
      store.getSolTestPeers().then((solPeers) => {
        setPeers(solPeers);
      });
    }
  }, [currentPage]);

  return (
    <Container>
      {peers.map((peer) => (
        <TestPeerItem key={peer.publicKey} {...peer} />
      ))}
      {limit > 0 && (
        <TestPeerItemEmpty
          limit={limit}
          peers={peers}
          setPeers={setPeers}
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
