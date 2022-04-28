import create from "zustand";
import { Blockchain, CryptoKeypair } from "types";

export interface SetupInfo {
  revisit: boolean;
  setupType: "import" | "create";
  seedWords: string;
  blockchain: Blockchain;
  keypair: CryptoKeypair;
  password: string;
  username: string;
}

interface UseSetupInfoProps {
  setupInfo: SetupInfo;
  setSetupInfo: (setupInfo: SetupInfo) => void;
}

export const useSetupInfo = create<UseSetupInfoProps>((set) => ({
  setupInfo: {
    revisit: false,
    setupType: "import",
    seedWords: "",
    keypair: {
      pathIndex: 0,
      publicKey: "",
      privateKey: "",
      nickname: "Account 1",
    },
    blockchain: "eth",
    password: "",
    username: "User",
  },
  setSetupInfo: (setupInfo) => set((_state) => ({ setupInfo })),
}));
