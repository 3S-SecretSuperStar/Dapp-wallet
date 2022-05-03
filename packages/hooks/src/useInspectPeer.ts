import { Blockchain, TestWallet } from "types";
import create from "zustand";

interface Peer {
  peerInfo: TestWallet;
  blockchain: Blockchain;
}

interface UseInspectPeerProps {
  peer: Peer;
  setPeer: (peer: Peer) => void;
}

export const useInspectPeer = create<UseInspectPeerProps>((set) => ({
  peer: {
    blockchain: "eth",
    peerInfo: {
      publicKey: "",
      avatar: "",
      nickname: "",
      colorSet: { bg: "", fg: "" },
    },
  },
  setPeer: (peer) => set((_state) => ({ peer })),
}));
