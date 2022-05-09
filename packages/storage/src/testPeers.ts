import { TestWallet } from "types";
import { LocalStorage, LocalStorageKeys } from "..";

const setTestPeers = (ethTestPeers: TestWallet[]): Promise<void> => {
  const values: LocalStorage = { ethTestPeers };
  return new Promise((resolve) => {
    chrome.storage.local.set(values, () => {
      resolve();
    });
  });
};

const getTestPeers = (): Promise<TestWallet[]> => {
  const keys: LocalStorageKeys[] = ["ethTestPeers"];
  return new Promise((resolve) => {
    chrome.storage.local.get(keys, (res: LocalStorage) => {
      resolve(res.ethTestPeers ?? []);
    });
  });
};

export const storageTestPeers = {
  setTestPeers,
  getTestPeers,
};
