import React from "react";
import { SetupFirstPage } from "./SetupFirst.Page";
import { SetupPasswordPage } from "./SetupPassword.Page";
import { SetupBlockchainPage } from "./SetupBlockchain.Page";
import { SetupImportPage } from "./SetupImport.Page";
import { SetupCreatePage } from "./SetupCreate.Page";
import { useSetupPage } from "hooks";

export const PopupSetupPage = () => {
  const { currentPage } = useSetupPage();
  return (
    <>
      {currentPage === "first" && <SetupFirstPage />}
      {currentPage === "blockchain" && <SetupBlockchainPage />}
      {currentPage === "import" && <SetupImportPage />}
      {currentPage === "create" && <SetupCreatePage />}
      {currentPage === "password" && <SetupPasswordPage />}
    </>
  );
};
