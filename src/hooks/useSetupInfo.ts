import create from "zustand";

export type Blockchain = "eth" | "sol";

export interface SetupInfo {
  setupType: "import" | "create";
  seedWords: string;
  blockchain: Blockchain;
}

interface UseSetupInfoProps {
  setupInfo: SetupInfo;
  setSetupInfo: (setupInfo: SetupInfo) => void;
}

export const useSetupInfo = create<UseSetupInfoProps>((set) => ({
  setupInfo: { setupType: "import", seedWords: "", blockchain: "eth" },
  setSetupInfo: (setupInfo) => set((_state) => ({ setupInfo })),
}));
