import { LocalStorage, LocalStorageKeys, SolanaNetwork } from ".";

export const setSolanaNetwork = (
  solanaNetwork: SolanaNetwork
): Promise<void> => {
  const values: LocalStorage = { solanaNetwork };
  return new Promise((resolve) => {
    chrome.storage.local.set(values, () => {
      resolve();
    });
  });
};

export const getSolanaNetwork = (): Promise<SolanaNetwork> => {
  const keys: LocalStorageKeys[] = ["solanaNetwork"];
  return new Promise((resolve) => {
    chrome.storage.local.get(keys, (res: LocalStorage) => {
      resolve(res.solanaNetwork ?? "Mainnet");
    });
  });
};
