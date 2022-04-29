import React from "react";
import { ModalPageContainer } from "../../atoms";
import { MultiSimTestUsersSection } from "../../organisms/MultiSim";

export const ModalMultiSimPage = () => {
  return (
    <ModalPageContainer pageTitle="Multi-Sim">
      <MultiSimTestUsersSection />
    </ModalPageContainer>
  );
};
