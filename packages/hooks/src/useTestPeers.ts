import { Blockchain, TestWallet } from "types";
import create from "zustand";

interface UseTestPeersProps {
  peers: TestWallet[];
  getPeersByBlockchain: (blockchain: Blockchain) => TestWallet[];
  setPeers: (peers: TestWallet[]) => void;
  addPeer: (peer: TestWallet) => void;
  deletePeer: (peer: TestWallet) => void;
}

export const useTestPeers = create<UseTestPeersProps>((set, get) => ({
  peers: [],
  getPeersByBlockchain: (blockchain) => {
    const filteredPeers = get().peers.filter(
      (peer) => peer.blockchain === blockchain
    );
    return filteredPeers;
  },
  setPeers: (peers) => set((_state) => ({ peers })),
  addPeer: (peer) => set((state) => ({ peers: [...state.peers, peer] })),
  deletePeer: (peer) =>
    set((state) => ({
      peers: state.peers.filter((p) => p.address !== peer.address),
    })),
}));
