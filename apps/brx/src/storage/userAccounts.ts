import { HDAccount, LocalStorage, LocalStorageKeys } from ".";

export const setUserAccounts = (userAccounts: HDAccount[]): Promise<void> => {
  const values: LocalStorage = { userAccounts };
  return new Promise((resolve) => {
    chrome.storage.local.set(values, () => {
      resolve();
    });
  });
};

export const getUserAccounts = (): Promise<HDAccount[]> => {
  const keys: LocalStorageKeys[] = ["userAccounts"];
  return new Promise((resolve) => {
    chrome.storage.local.get(keys, (res: LocalStorage) => {
      resolve(res.userAccounts ?? []);
    });
  });
};
