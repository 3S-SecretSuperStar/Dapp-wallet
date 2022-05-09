import { Blockchain } from "types";
import create from "zustand";

export type MultiSimPage = "all" | Blockchain;

interface UseMultiSimPageProps {
  currentPage: MultiSimPage;
  setCurrentPage: (page: MultiSimPage) => void;
}

export const useMultiSimPage = create<UseMultiSimPageProps>((set) => ({
  currentPage: "all",
  setCurrentPage: (page) => set((_state) => ({ currentPage: page })),
}));
