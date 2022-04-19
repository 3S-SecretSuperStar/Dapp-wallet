export interface LocalStorage {
  floatPosition?: { x: number; y: number };
  solanaNetwork?: SolanaNetwork;
  userMnemonic?: string;
  userAccounts?: HDAccount[];
}

export type LocalStorageKeys = keyof LocalStorage;

export const setFloatPosition = (floatPosition: {
  x: number;
  y: number;
}): Promise<void> => {
  const values: LocalStorage = { floatPosition };
  return new Promise((resolve) => {
    chrome.storage.local.set(values, () => {
      resolve();
    });
  });
};

export const getFloatPosition = (): Promise<{ x: number; y: number }> => {
  const keys: LocalStorageKeys[] = ["floatPosition"];
  return new Promise((resolve) => {
    chrome.storage.local.get(keys, (res: LocalStorage) => {
      resolve(res.floatPosition ?? { x: 12, y: 12 });
    });
  });
};

export type SolanaNetwork = "Mainnet" | "Testnet" | "Devnet" | "Localhost";

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

export interface HDAccount {
  index: number;
  publicKey: string;
}

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
