import { CheckCircleIcon } from "@heroicons/react/outline";
import React, { useEffect, useState } from "react";
import { usePopupMenu } from "../../../hooks/usePopupMenu";
import { usePopupPage } from "../../../hooks/usePopupPage";
import { classNames, GLASSMORPHIC } from "../../../utils/helper";
import { getSolanaNetwork, SolanaNetwork } from "../../../utils/storage";
import { MenuPopup } from "./MenuPopup";

export const PopupTopBar = () => {
  const [network, setNetwork] = useState<SolanaNetwork>("Mainnet");
  const [showNetworkMenu, setShowNetworkMenu] = useState<boolean>(false);
  const [connected, setConnected] = useState<boolean>(false);
  const { setCurrentPage } = usePopupPage();
  const { open: menuOpen, toggleOpen: toggleMenuOpen } = usePopupMenu();

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
    <header
      className={classNames(
        "fixed top-0 w-full min-h-18 flex items-center justify-around px-4 overflow-x-none",
        GLASSMORPHIC
      )}
    >
      <img
        src="/icons/FlowTxIconSVG.svg"
        alt="flowtx logo"
        onClick={() => setCurrentPage("main")}
        className={classNames(
          showNetworkMenu ? "absolute -left-10" : "relative left-0",
          "transition-all duration-500 ease-in-out w-10 h-10 cursor-pointer"
        )}
      />
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
            <CheckCircleIcon
              onClick={() => setConnected(!connected)}
              className="w-6 h-6 cursor-pointer"
            />
          </>
        )}
      </div>
      <img
        src="/icons/FlowTxIcon128.png"
        alt="user avatar"
        className={classNames(
          showNetworkMenu ? "absolute -right-10" : "relative right-0",
          "transition-all border-2 rounded-full w-10 h-10 duration-500 cursor-pointer"
        )}
        onClick={toggleMenuOpen}
      />
      {menuOpen && <MenuPopup />}
    </header>
  );
};
