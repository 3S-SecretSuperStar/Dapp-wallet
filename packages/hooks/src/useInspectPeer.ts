import { TestWallet } from "types";
import create from "zustand";

interface UseInspectPeerProps {
  peer: TestWallet;
  currentPage: "history" | "info";
  setPeer: (peer: TestWallet) => void;
  setCurrentPage: (currentPage: "history" | "info") => void;
}

export const useInspectPeer = create<UseInspectPeerProps>((set) => ({
  peer: {
    blockchain: "eth",
    transactions: [],
    balance: 0,
    address: "",
    avatar: "",
    nickname: "",
    colorSet: { bg: "", fg: "" },
  },
  currentPage: "history",
  setPeer: (peer) => set((_state) => ({ peer })),
  setCurrentPage: (currentPage) => set((_state) => ({ currentPage })),
}));
