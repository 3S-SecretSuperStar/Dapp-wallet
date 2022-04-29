import { TestWallet, UserInfo } from "types";

export type LocalStorageKeys = keyof LocalStorage;

export interface LocalStorage {
  floatPosition?: { x: number; y: number };
  userInfo?: UserInfo;
  ethTestPeers?: TestWallet[];
  solTestPeers?: TestWallet[];
}

export { storageFloatPosition } from "./src/floatPosition";
export { storageUserInfo } from "./src/userInfo";
export { storageTestClusters } from "./src/testClusters";
