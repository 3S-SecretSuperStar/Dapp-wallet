import React, { useEffect } from "react";
import styled from "styled-components";
import { useEthTestPeers, useMultiSimPage, useSolTestPeers } from "hooks";
import { ModalPageContainer } from "../../atoms";
import {
  MultiSimSummarySection,
  MultiSimTabNav,
  MultiSimTestPeersSection,
} from "../../organisms/MultiSim";
import { storageTestPeers as store } from "storage";

export const ModalMultiSimPage = () => {
  const { currentPage } = useMultiSimPage();
  const { peers: ethPeers, setPeers: setEthPeers } = useEthTestPeers();
  const { peers: solPeers, setPeers: setSolPeers } = useSolTestPeers();

  useEffect(() => {
    store.getEthTestPeers().then((peers) => setEthPeers(peers));
    store.getSolTestPeers().then((peers) => setSolPeers(peers));
  }, []);

  return (
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
  );
};

const SummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
