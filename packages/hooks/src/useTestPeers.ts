import { TestWallet } from "types";
import create from "zustand";

interface UseTestPeersProps {
  peers: TestWallet[];
  setPeers: (peers: TestWallet[]) => void;
  addPeer: (peer: TestWallet) => void;
  deletePeer: (peer: TestWallet) => void;
}

export const useEthTestPeers = create<UseTestPeersProps>((set) => ({
  peers: [],
  setPeers: (peers) => set((state) => ({ peers })),
  addPeer: (peer) => set((state) => ({ peers: [...state.peers, peer] })),
  deletePeer: (peer) =>
    set((state) => ({
      peers: state.peers.filter((p) => p.publicKey !== peer.publicKey),
    })),
}));

export const useSolTestPeers = create<UseTestPeersProps>((set) => ({
  peers: [],
  setPeers: (peers) => set((state) => ({ peers })),
  addPeer: (peer) => set((state) => ({ peers: [...state.peers, peer] })),
  deletePeer: (peer) =>
    set((state) => ({
      peers: state.peers.filter((p) => p.publicKey !== peer.publicKey),
    })),
}));
