import React, { useEffect, useState } from "react";
import { storageUserInfo } from "storage";
import styled from "styled-components";
import { CryptoWallet } from "types";
import { CryptoCard, CryptoCardEmpty } from "../../molecules";

export const MainCardListSection = () => {
  const { getUserInfo } = storageUserInfo;
  const [index, setIndex] = useState<number>(0);
  const [wallets, setWallets] = useState<CryptoWallet[]>([]);

  const missingBlockchain = () => {
    const blockchains = wallets.map((wallet) => wallet.blockchain);
    return !blockchains.includes("eth") ? "eth" : "sol";
  };

  useEffect(() => {
    getUserInfo().then((userInfo) => {
      setWallets(userInfo.wallets);
    });
  }, []);

  const swipePrev = () => {
    if (index === 0) return;
    setIndex(index - 1);
  };

  const swipeNext = () => {
    if (index === 1) return;
    setIndex(index + 1);
  };

  return (
    <Container>
      <LeftClickArea onClick={swipePrev} />
      <RightClickArea onClick={swipeNext} />
      <SwipeArea index={index}>
        {wallets.map((wallet) => (
          <CryptoCard
            key={`card-${wallet.blockchain}`}
            blockchain={wallet.blockchain}
            publicKey={wallet.mainAccount.publicKey}
          />
        ))}
        {wallets.length < 2 && (
          <CryptoCardEmpty blockchain={missingBlockchain()} />
        )}
      </SwipeArea>
    </Container>
  );
};

const Container = styled.section`
  position: relative;
`;

const SwipeArea = styled.div<{ index: number }>`
  position: relative;
  display: inline-flex;
  flex-direction: row;
  gap: 12px;
  align-content: center;
  justify-content: start;
  padding: 0px 20px;
  transform: ${(props) => `translate(-${props.index * 240}px, 0px)`};
  transition: transform 0.5s ease-in-out;
`;

const LeftClickArea = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 52px;
  height: 100%;
  z-index: 20;
  cursor: pointer;
`;

const RightClickArea = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 52px;
  height: 100%;
  z-index: 20;
  cursor: pointer;
`;
