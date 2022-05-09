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
  MultiSimPeerInfoSection,
  MultiSimPeerHistorySection,
  MultiSimSummarySection,
  MultiSimTestPeersSection,
} from "../../organisms/MultiSim";
import { storageTestPeers as store } from "storage";
import { TabsProps } from "../../molecules";

export const ModalMultiSimPage = () => {
  const { currentPage: multiSimPage, setCurrentPage: setMultiSimPage } =
    useMultiSimPage();
  const { currentPage: inspectPeerPage, setCurrentPage: setInspectPeerPage } =
    useInspectPeer();
  const { isOpen } = useHigherModalPage();
  const { getPeersByBlockchain, setPeers } = useTestPeers();

  useEffect(() => {
    store.getTestPeers().then((peers) => setPeers(peers));
  }, []);

  const multiSimTabsProps: TabsProps = {
    currentPage: multiSimPage,
    tabItems: [
      {
        text: "All",
        page: "all",
        onClick: () => {
          setMultiSimPage("all");
        },
      },
      {
        text: "ETH",
        page: "eth",
        onClick: () => {
          setMultiSimPage("eth");
        },
      },
      {
        text: "SOL",
        page: "sol",
        onClick: () => {
          setMultiSimPage("sol");
        },
      },
    ],
  };

  const inspectPeerTabsProps: TabsProps = {
    currentPage: inspectPeerPage,
    tabItems: [
      {
        text: "History",
        page: "history",
        onClick: () => {
          setInspectPeerPage("history");
        },
      },
      {
        text: "Info",
        page: "info",
        onClick: () => {
          setInspectPeerPage("info");
        },
      },
    ],
  };

  return (
    <>
      <ModalPageContainer
        modalHeight="tall"
        pageTitle="Multi-Sim"
        tabsProps={multiSimTabsProps}
      >
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
        <PeerInfoContainer
          pageTitle="Peer Info"
          tabsProps={inspectPeerTabsProps}
          modalHeight="tall"
        >
          {inspectPeerPage === "history" && <MultiSimPeerHistorySection />}
          {inspectPeerPage === "info" && <MultiSimPeerInfoSection />}
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
