import create from "zustand";

interface UseModalProps {
  isModalOpen: boolean;
  setIsModalOpen: (isModalOpen: boolean) => void;
}

export const useModal = create<UseModalProps>((set) => ({
  isModalOpen: false,
  setIsModalOpen: (isModalOpen) => set((_state) => ({ isModalOpen })),
}));
