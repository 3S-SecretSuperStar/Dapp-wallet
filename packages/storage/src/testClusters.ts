import { TestWallet } from "types";
import { LocalStorage, LocalStorageKeys } from "..";

const setEthTestPeers = (ethTestPeers: TestWallet[]): Promise<void> => {
  const values: LocalStorage = { ethTestPeers };
  return new Promise((resolve) => {
    chrome.storage.local.set(values, () => {
      resolve();
    });
  });
};

const getEthTestPeers = (): Promise<TestWallet[]> => {
  const keys: LocalStorageKeys[] = ["ethTestPeers"];
  return new Promise((resolve) => {
    chrome.storage.local.get(keys, (res: LocalStorage) => {
      resolve(res.ethTestPeers ?? []);
    });
  });
};

const setSolTestPeers = (solTestPeers: TestWallet[]): Promise<void> => {
  const values: LocalStorage = { solTestPeers };
  return new Promise((resolve) => {
    chrome.storage.local.set(values, () => {
      resolve();
    });
  });
};

const getSolTestPeers = (): Promise<TestWallet[]> => {
  const keys: LocalStorageKeys[] = ["solTestPeers"];
  return new Promise((resolve) => {
    chrome.storage.local.get(keys, (res: LocalStorage) => {
      resolve(res.solTestPeers ?? []);
    });
  });
};

export const storageTestClusters = {
  setEthTestPeers,
  getEthTestPeers,
  setSolTestPeers,
  getSolTestPeers,
};
