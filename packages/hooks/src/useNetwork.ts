import create from "zustand";
import { EthNetwork, SolNetwork } from "types";

interface Network {
  eth: EthNetwork;
  sol: SolNetwork;
}

interface UseNetworkProps {
  network: Network;
  setEthNetwork: (eth: EthNetwork) => void;
  setSolNetwork: (sol: SolNetwork) => void;
}

export const useNetwork = create<UseNetworkProps>((set) => ({
  network: { eth: "rinkeby", sol: "localhost" },
  setEthNetwork: (eth) =>
    set((state) => ({ network: { ...state.network, eth } })),
  setSolNetwork: (sol) =>
    set((state) => ({ network: { ...state.network, sol } })),
}));
