import React from "react";
import { useSettingsPage } from "hooks";
import { SettingsApiKeyPage } from "./SettingsApiKey.Page";

export const PopupSettingsPage = () => {
  const { currentPage } = useSettingsPage();
  return <>{currentPage === "apiKey" && <SettingsApiKeyPage />}</>;
};
