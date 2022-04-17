import React from "react";
import { BG_GRADIENT_DARK, classNames } from "../utils/helper";
import { PopupHomePage } from "../components/popup/HomePage";
import { PopupTopBar } from "../components/popup/TopBar";
import "./popup.css";

export type PopupNavOption = "home" | "history" | "exchange" | "settings";

export const PopupView = () => {
  return (
    <div
      className={classNames(
        BG_GRADIENT_DARK,
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
