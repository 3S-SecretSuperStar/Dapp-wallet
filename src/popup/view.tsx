import React from "react";
import { classNames } from "../utils/helper";
import { PopupMainPage } from "../components/popup/Main/Main.Page";
import { PopupTopBar } from "../components/popup/common/TopBar";
import "./popup.css";
import { usePopupPage } from "../hooks/usePopupPage";
import { PopupCreateWalletPage } from "../components/popup/CreateWallet/CreateWallet.Page";

export type PopupNavOption = "home" | "history" | "exchange" | "settings";

export const PopupView = () => {
  const { currentPage } = usePopupPage();
  return (
    <div
      className={classNames(
        "bg-gradient-to-tr from-fuchsia-900 via-blue-900 to-teal-700",
        "w-[360px] h-[480px] flex flex-col justify-between text-white overflow-y-auto"
      )}
      style={{ msOverflowStyle: "none" }}
    >
      <PopupTopBar />
      <main className="h-full">
        {currentPage === "main" && <PopupMainPage />}
        {currentPage === "createWallet" && <PopupCreateWalletPage />}
      </main>
    </div>
  );
};
