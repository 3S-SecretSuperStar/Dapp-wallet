import { LocalStorage, LocalStorageKeys } from ".";

export const NO_MNEMONIC = "No Mnemonic Phrase.";

export const setUserMnemonic = (userMnemonic: string): Promise<void> => {
  const values: LocalStorage = { userMnemonic };
  return new Promise((resolve) => {
    chrome.storage.local.set(values, () => {
      resolve();
    });
  });
};

export const getUserMnemonic = (): Promise<string> => {
  const keys: LocalStorageKeys[] = ["userMnemonic"];
  return new Promise((resolve) => {
    chrome.storage.local.get(keys, (res: LocalStorage) => {
      resolve(res.userMnemonic ?? NO_MNEMONIC);
    });
  });
};
