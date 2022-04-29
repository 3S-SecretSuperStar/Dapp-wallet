import { useModalPage } from "hooks";
import React from "react";
import { ModalMultiSimPage } from "./ModalMultiSim.Page";

export const PopupModalPage = () => {
  const {
    modalPage: { page },
  } = useModalPage();
  return <>{page === "multisim" && <ModalMultiSimPage />}</>;
};
