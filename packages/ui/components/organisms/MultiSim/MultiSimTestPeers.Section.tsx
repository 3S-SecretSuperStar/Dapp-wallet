import React, { useEffect, useMemo } from "react";
import styled from "styled-components";
import { useEthTestPeers, useMultiSimPage, useSolTestPeers } from "hooks";
import { storageTestPeers as store } from "storage";
import { TestPeerItem, TestPeerItemEmpty } from "../../molecules";
import { Blockchain } from "types";

export const MultiSimTestPeersSection = () => {
  const { currentPage } = useMultiSimPage();
  const { peers: ethPeers, setPeers: setEthPeers } = useEthTestPeers();
  const { peers: solPeers, setPeers: setSolPeers } = useSolTestPeers();

  const peers = useMemo(() => {
    if (currentPage === "eth") {
      return ethPeers;
    } else if (currentPage === "sol") {
      return solPeers;
    } else {
      return [];
    }
  }, [currentPage, ethPeers, solPeers]);

  const limit = useMemo(() => 10 - peers.length, [peers]);

  const blockchain: Blockchain = useMemo(() => {
    switch (currentPage) {
      case "eth":
        return "eth";
      case "sol":
        return "sol";
      default:
        return "eth";
    }
  }, [currentPage]);

  console.log(peers);

  useEffect(() => {
    store.getEthTestPeers().then((peers) => setEthPeers(peers));
    store.getSolTestPeers().then((peers) => setSolPeers(peers));
  }, []);

  return (
    <Container>
      {peers.map((peer) => (
        <TestPeerItem
          key={peer.publicKey}
          peer={peer}
          blockchain={blockchain}
        />
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
