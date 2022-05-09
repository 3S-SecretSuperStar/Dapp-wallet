import { EthApiProviderKey, TestWallet, UserInfo } from "types";

export type LocalStorageKeys = keyof LocalStorage;

export interface LocalStorage {
  floatPosition?: { x: number; y: number };
  userInfo?: UserInfo;
  ethTestPeers?: TestWallet[];
  solTestPeers?: TestWallet[];
  ethApiProviderKey?: EthApiProviderKey;
}

export * from "./src/floatPosition";
export * from "./src/userInfo";
export * from "./src/testPeers";
export * from "./src/ethApiProviderKey";
