import React from "react";
import { ModalPageContainer } from "../../atoms";
import { MultiSimTestUsersSection } from "../../organisms/MultiSim";

export const ModalMultiSimPage = () => {
  return (
    <ModalPageContainer>
      <h1>Multi-Sim</h1>
      <MultiSimTestUsersSection />
    </ModalPageContainer>
  );
};
