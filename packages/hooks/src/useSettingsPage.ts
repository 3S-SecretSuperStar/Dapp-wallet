import create from "zustand";

export type SettingsPage = "apiKey" | "main";

interface UseSettingsPageProps {
  currentPage: SettingsPage;
  setCurrentPage: (page: SettingsPage) => void;
}

export const useSettingsPage = create<UseSettingsPageProps>((set) => ({
  currentPage: "apiKey",
  setCurrentPage: (page) => set((_state) => ({ currentPage: page })),
}));
