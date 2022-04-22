import create from "zustand";

export type IntroPage = "compass" | "friends" | "manage";

interface UseIntroPageProps {
  currentPage: IntroPage;
  setCurrentPage: (page: IntroPage) => void;
}

export const useIntroPage = create<UseIntroPageProps>((set) => ({
  currentPage: "compass",
  setCurrentPage: (page: IntroPage) => set((_state) => ({ currentPage: page })),
}));
