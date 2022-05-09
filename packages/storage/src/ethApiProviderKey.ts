import { EthApiProviderKey } from "types";
import { LocalStorage, LocalStorageKeys } from "..";

const setEthApiProviderKey = (
  ethApiProviderKey: EthApiProviderKey
): Promise<void> => {
  const values: LocalStorage = { ethApiProviderKey };
  return new Promise((resolve) => {
    chrome.storage.local.set(values, () => {
      resolve();
    });
  });
};

const getEthApiProviderKey = (): Promise<EthApiProviderKey> => {
  const keys: LocalStorageKeys[] = ["ethApiProviderKey"];
  return new Promise((resolve) => {
    chrome.storage.local.get(keys, (res: LocalStorage) => {
      resolve(res.ethApiProviderKey ?? { provider: "infura", apiKey: "" });
    });
  });
};

export const storageEthApiProviderKey = {
  setEthApiProviderKey,
  getEthApiProviderKey,
};
