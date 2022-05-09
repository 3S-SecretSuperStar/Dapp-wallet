import { useInspectPeer, useNetwork } from "hooks";
import React, { useEffect, useState } from "react";
import { storageEthApiProviderKey as store } from "storage";
import styled from "styled-components";
import { Blockchain, TestWallet } from "types";
import { getEthBalance, getSolBalance } from "utils/account";
import { GradientH4 } from "../../atoms";

interface MultiSimPeerHistorySectionProps {}

export const MultiSimPeerHistorySection: React.FC<
  MultiSimPeerHistorySectionProps
> = () => {
  const { peer } = useInspectPeer();
  const { network } = useNetwork();
  const [balance, setBalance] = useState<number>(0);

  const getBalanceAndSet = async (active: boolean, peer: TestWallet) => {
    let bal = 0;
    if (peer.blockchain === "eth") {
      const { apiKey } = await store.getEthApiProviderKey();
      bal = await getEthBalance(peer.address, network.eth, apiKey);
      console.log(bal);
    } else if (peer.blockchain === "sol") {
      bal = await getSolBalance(peer.address, network.sol);
    } else {
    }
    if (!active) {
      return;
    }
    setBalance(bal);
  };

  useEffect(() => {
    let active = true;
    getBalanceAndSet(active, peer);
    return () => {
      active = false;
    };
  }, [peer]);

  return (
    <Container>
      <BalanceContainer>
        <GradientH4>Available Balance</GradientH4>
        <h3>{balance}</h3>
      </BalanceContainer>
      <HistoryContainer></HistoryContainer>
    </Container>
  );
};

const Container = styled.div``;

const BalanceContainer = styled.div``;

const HistoryContainer = styled.div``;

const HistoryItem = styled.div``;
