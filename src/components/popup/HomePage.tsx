import {
  CurrencyDollarIcon,
  RefreshIcon,
  ShareIcon,
} from "@heroicons/react/outline";
import { CheckCircleIcon } from "@heroicons/react/solid";
import React from "react";
import { classNames } from "../../utils/helper";

export const PopupHomePage = () => {
  return (
    <div className="flex flex-col items-center justify-start w-full pt-24 pb-12">
      <div
        className={classNames(
          "rounded-full border-white border-2",
          "flex justify-center items-center h-12 w-12"
        )}
      >
        <img src="/solana-sol-logo.svg" alt="sol logo" className="w-6 h-6" />
      </div>
      <h1 className="text-3xl mt-6">
        <span className="font-bold text-5xl mr-2">202.12</span> SOL
      </h1>
      <div className="mt-8 flex items-center justify-around w-2/3">
        <div className="flex flex-col items-center justify-center gap-2">
          <CurrencyDollarIcon className="w-8 h-8" />
          <p className="text-center">Buy</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <ShareIcon className="w-8 h-8" />
          <p className="text-center">Send</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <RefreshIcon className="w-8 h-8" />
          <p className="text-center">Swap</p>
        </div>
      </div>
      <div className="mt-12 w-5/6">
        <h2 className="text-2xl font-semibold">Recent</h2>
        <div className="mt-2 flex flex-col divide-y">
          <HistoryItem method="Receive" />
          <HistoryItem method="Receive" />
          <HistoryItem method="Receive" />
          <HistoryItem method="Receive" />
          <HistoryItem method="Receive" />
        </div>
      </div>
    </div>
  );
};

const HistoryItem: React.FC<{ method: string }> = ({ method }) => {
  return (
    <div className="flex justify-start items-center py-2 gap-2">
      <CheckCircleIcon className="w-8 h-8" />
      <div>
        <h3 className="text-base font-medium">{method}</h3>
        <p>
          From <span className="opacity-80">1dkajf1jfjkSDFj...</span>
        </p>
      </div>
    </div>
  );
};
