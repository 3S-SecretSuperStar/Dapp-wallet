import create from "zustand";
import { Blockchain, CryptoKeypair } from "types";

export interface SetupInfo {
  setupType: "import" | "create";
  seedWords: string;
  blockchain: Blockchain;
  keypair: CryptoKeypair;
  password: string;
}

interface UseSetupInfoProps {
  setupInfo: SetupInfo;
  setSetupInfo: (setupInfo: SetupInfo) => void;
}

export const useSetupInfo = create<UseSetupInfoProps>((set) => ({
  setupInfo: {
    setupType: "import",
    seedWords: "",
    keypair: { pathIndex: 0, publicKey: "", privateKey: "" },
    blockchain: "eth",
    password: "",
  },
  setSetupInfo: (setupInfo) => set((_state) => ({ setupInfo })),
}));
