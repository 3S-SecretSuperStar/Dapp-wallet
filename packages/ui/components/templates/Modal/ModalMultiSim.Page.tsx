import React, { useEffect } from "react";
import styled from "styled-components";
import {
  useHigherModalPage,
  useInspectPeer,
  useMultiSimPage,
  useTestPeers,
} from "hooks";
import { HigherModalPageContainer, ModalPageContainer } from "../../atoms";
import {
  MultiSimEditPeerSection,
  MultiSimInspectPeerNav,
  MultiSimPeerHistorySection,
  MultiSimSummarySection,
  MultiSimTabNav,
  MultiSimTestPeersSection,
} from "../../organisms/MultiSim";
import { storageTestPeers as store } from "storage";

export const ModalMultiSimPage = () => {
  const { currentPage: multiSimPage } = useMultiSimPage();
  const { currentPage: inspectPeerPage } = useInspectPeer();
  const { isOpen } = useHigherModalPage();
  const { getPeersByBlockchain, setPeers } = useTestPeers();

  useEffect(() => {
    store.getTestPeers().then((peers) => setPeers(peers));
  }, []);

  return (
    <>
      <ModalPageContainer pageTitle="Multi-Sim">
        <MultiSimTabNav />
        {multiSimPage === "all" && (
          <SummaryContainer>
            <MultiSimSummarySection
              title="Ethereum"
              peers={getPeersByBlockchain("eth")}
            />
            <MultiSimSummarySection
              title="Solana"
              peers={getPeersByBlockchain("sol")}
            />
          </SummaryContainer>
        )}
        {multiSimPage !== "all" && (
          <MultiSimTestPeersSection blockchain={multiSimPage} />
        )}
      </ModalPageContainer>
      {isOpen && (
        <PeerInfoContainer pageTitle="Peer Info">
          <MultiSimInspectPeerNav />
          {inspectPeerPage === "history" && <MultiSimPeerHistorySection />}
          {inspectPeerPage === "info" && <MultiSimEditPeerSection />}
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
