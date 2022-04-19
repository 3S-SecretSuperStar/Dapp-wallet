import create from "zustand";

interface UsePopupMenuProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  toggleOpen: () => void;
}

export const usePopupMenu = create<UsePopupMenuProps>((set) => ({
  open: false,
  setOpen: (open) => set((_state) => ({ open: open })),
  toggleOpen: () => set((state) => ({ open: !state.open })),
}));
