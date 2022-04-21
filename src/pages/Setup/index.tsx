import { useSetupPage } from "@hooks/useSetupPage";
import React from "react";
import { SetupFirstPage } from "./SetupFirst.Page";

export const PopupSetupPage = () => {
  const { currentPage } = useSetupPage();
  return (
    <>
      {currentPage === "first" && <SetupFirstPage />}
      {/* {currentPage === "importSeed" && <SetupImportSeedPage />}
      {currentPage === "createSeed" && <SetupCreateSeedPage />}
      {currentPage === "createPassword" && <SetupCreatePasswordPage />} */}
    </>
  );
};
