import React from "react";
import { useMultiSimPage } from "hooks";
import { ModalPageContainer } from "../../atoms";
import {
  MultiSimTabNav,
  MultiSimTestPeersSection,
} from "../../organisms/MultiSim";

export const ModalMultiSimPage = () => {
  const { currentPage } = useMultiSimPage();
  return (
    <ModalPageContainer pageTitle="Multi-Sim">
      <MultiSimTabNav />
      {currentPage !== "all" && <MultiSimTestPeersSection />}
    </ModalPageContainer>
  );
};
