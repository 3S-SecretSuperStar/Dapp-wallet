import { UserInfo } from "types";
import { LocalStorage, LocalStorageKeys } from ".";

const setUserInfo = (userInfo: UserInfo): Promise<void> => {
  const values: LocalStorage = { userInfo };
  return new Promise((resolve) => {
    chrome.storage.local.set(values, () => {
      resolve();
    });
  });
};

const getUserInfo = (): Promise<UserInfo> => {
  const keys: LocalStorageKeys[] = ["userInfo"];
  return new Promise((resolve) => {
    chrome.storage.local.get(keys, (res: LocalStorage) => {
      resolve(res.userInfo ?? { wallets: [], password: "", username: "" });
    });
  });
};

export const storageUserInfo = { getUserInfo, setUserInfo };
