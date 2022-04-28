import { UserInfo } from "types";

export type LocalStorageKeys = keyof LocalStorage;

export interface LocalStorage {
  floatPosition?: { x: number; y: number };
  userInfo?: UserInfo;
}

export { storageFloatPosition } from "./floatPosition";
export { storageUserInfo } from "./userInfo";
