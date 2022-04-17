import React from "react";
import { classNames } from "../utils/helper";
import { PopupHomePage } from "../components/popup/HomePage";
import { PopupTopBar } from "../components/popup/TopBar";
import "./popup.css";

export type PopupNavOption = "home" | "history" | "exchange" | "settings";

export const PopupView = () => {
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
        <PopupHomePage />
      </main>
    </div>
  );
};
