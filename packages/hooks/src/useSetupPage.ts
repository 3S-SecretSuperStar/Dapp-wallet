import create from "zustand";

export type SetupPage =
  | "first"
  | "blockchain"
  | "import"
  | "choose"
  | "create"
  | "username"
  | "password";

interface UseSetupPageProps {
  currentPage: SetupPage;
  setCurrentPage: (page: SetupPage) => void;
}

export const useSetupPage = create<UseSetupPageProps>((set) => ({
  currentPage: "first",
  setCurrentPage: (page: SetupPage) => set((_state) => ({ currentPage: page })),
}));
