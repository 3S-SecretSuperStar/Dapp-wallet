import create from "zustand";

export type ModalPage =
  | "airdrop"
  | "multisim"
  | "mobile"
  | "message"
  | "contact"
  | "network"
  | "compass";

interface UseModalPageProps {
  modalPage: { isOpen: boolean; page: ModalPage };
  setModalOpen: (isOpen: boolean) => void;
  setModalPage: (page: ModalPage) => void;
}

export const useModalPage = create<UseModalPageProps>((set) => ({
  modalPage: { isOpen: false, page: "airdrop" },
  setModalOpen: (isOpen) =>
    set((state) => ({ modalPage: { ...state.modalPage, isOpen } })),
  setModalPage: (page) =>
    set((state) => ({ modalPage: { ...state.modalPage, page } })),
}));
