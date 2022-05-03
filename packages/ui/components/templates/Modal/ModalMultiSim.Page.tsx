import React, { useEffect } from "react";
import styled from "styled-components";
import {
  useEthTestPeers,
  useHigherModalPage,
  useMultiSimPage,
  useSolTestPeers,
} from "hooks";
import { HigherModalPageContainer, ModalPageContainer } from "../../atoms";
import {
  MultiSimEditPeerSection,
  MultiSimSummarySection,
  MultiSimTabNav,
  MultiSimTestPeersSection,
} from "../../organisms/MultiSim";
import { storageTestPeers as store } from "storage";

export const ModalMultiSimPage = () => {
  const { currentPage } = useMultiSimPage();
  const { isOpen } = useHigherModalPage();
  const { peers: ethPeers, setPeers: setEthPeers } = useEthTestPeers();
  const { peers: solPeers, setPeers: setSolPeers } = useSolTestPeers();

  useEffect(() => {
    store.getEthTestPeers().then((peers) => setEthPeers(peers));
    store.getSolTestPeers().then((peers) => setSolPeers(peers));
  }, []);

  return (
    <>
      <ModalPageContainer pageTitle="Multi-Sim">
        <MultiSimTabNav />
        {currentPage !== "all" && <MultiSimTestPeersSection />}
        {currentPage === "all" && (
          <SummaryContainer>
            <MultiSimSummarySection title="Ethereum" peers={ethPeers} />
            <MultiSimSummarySection title="Solana" peers={solPeers} />
          </SummaryContainer>
        )}
      </ModalPageContainer>
      {isOpen && (
        <PeerInfoContainer pageTitle="Peer Info">
          <MultiSimEditPeerSection />
        </PeerInfoContainer>
      )}
    </>
  );
};

const SummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const PeerInfoContainer = styled(HigherModalPageContainer)`
  margin: 16px 16px 64px 16px;
`;
