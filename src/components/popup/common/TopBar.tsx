import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { CheckCircleIcon } from "@heroicons/react/outline";
import { usePopupMenu } from "@hooks/usePopupMenu";
import { usePopupPage } from "@hooks/usePopupPage";
import { getSolanaNetwork, SolanaNetwork } from "@utils/storage";
import { PopupMenu } from "./PopupMenu";

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
      <NetworkItemButton
        onClick={() => {
          setNetwork(selectedNetwork);
          setShowNetworkMenu(false);
        }}
      >
        <p>{selectedNetwork}</p>
      </NetworkItemButton>
    );
  };

  return (
    <TopBarContainer id="top-bar">
      <MainLogo
        src="/icons/FlowTxIconSVG.svg"
        alt="flowtx logo"
        onClick={() => setCurrentPage("main")}
        show={showNetworkMenu}
      />
      <NetworkIndicator
        show={showNetworkMenu}
        onClick={() => {
          !showNetworkMenu && setShowNetworkMenu(true);
        }}
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
            <h3>{network}</h3>
            <CheckCircleIcon onClick={() => setConnected(!connected)} />
          </>
        )}
      </NetworkIndicator>
      <Avatar
        src="/icons/FlowTxIcon128.png"
        alt="user avatar"
        onClick={toggleMenuOpen}
        show={showNetworkMenu}
      />
      {menuOpen && <PopupMenu />}
    </TopBarContainer>
  );
};

const TopBarContainer = styled.header`
  position: fixed;
  z-index: 50;
  top: 0;
  left: 0;
  height: 64px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  overflow-x: hidden;
  background-color: #120c6e;
`;

const NetworkItemButton = styled.button`
  color: white;
  opacity: 0.7;
  :hover {
    opacity: 1;
  }
  p {
    font-size: medium;
    font-weight: 300;
  }
`;

const NetworkIndicator = styled.div<{ show: boolean }>`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 2px solid white;
  height: 40px;
  border-radius: 20px;
  width: ${({ show }) => (show ? "100%" : "50%")};
  cursor: pointer;
  h3 {
    font-weight: 400;
    font-size: medium;
    color: white;
  }
  svg {
    width: 26px;
    height: 26px;
    color: white;
  }
`;

const SideBtnImg = styled.img<{ show: boolean }>(({ show }) => ({
  position: show ? "fixed" : "relative",
  width: "40px",
  height: "40px",
  cursor: "pointer",
}));

const MainLogo = styled(SideBtnImg)`
  left: ${(props) => (props.show ? "-100px" : "0px")};
`;

const Avatar = styled(SideBtnImg)`
  right: ${(props) => (props.show ? "-100px" : "0px")};
  border: 2px solid white;
  border-radius: 20px;
  object-fit: contain;
`;
