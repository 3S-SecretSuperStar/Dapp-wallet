import { CheckCircleIcon } from "@heroicons/react/outline";
import React from "react";
import { useState, useEffect } from "react";
import { classNames } from "../utils/helper";
import { getSolanaNetwork, SolanaNetwork } from "../utils/storage";

export const NetworkOptions = () => {
  const [network, setNetwork] = useState<SolanaNetwork>("Mainnet");
  const [showNetworkMenu, setShowNetworkMenu] = useState<boolean>(false);

  useEffect(() => {
    getSolanaNetwork().then(setNetwork);
  }, []);

  const NetworkOptionItem: React.FC<{ selectedNetwork: SolanaNetwork }> = ({
    selectedNetwork,
  }) => {
    return (
      <button
        onClick={() => {
          setNetwork(selectedNetwork);
          setShowNetworkMenu(false);
        }}
        className={classNames(
          network === selectedNetwork
            ? "opacity-100 font-semibold"
            : "opacity-80 font-normal",
          "hover:opacity-100 transition-all"
        )}
      >
        {selectedNetwork}
      </button>
    );
  };
  return (
    <div
      onClick={() => {
        !showNetworkMenu && setShowNetworkMenu(true);
      }}
      className={classNames(
        "border-2 border-white rounded-full h-10 px-2 cursor-pointer",
        "flex items-center justify-around transition-all duration-500 ease-in-out",
        showNetworkMenu ? "w-full" : "w-40"
      )}
    >
      {showNetworkMenu ? (
        <>
          <NetworkOptionItem selectedNetwork="Mainnet" />
          <NetworkOptionItem selectedNetwork="Testnet" />
          <NetworkOptionItem selectedNetwork="Devnet" />
          <NetworkOptionItem selectedNetwork="Localhost" />
        </>
      ) : (
        <>
          <p className="text-base">{network}</p>
          <CheckCircleIcon className="w-6 h-6 cursor-pointer" />
        </>
      )}
    </div>
  );
};
