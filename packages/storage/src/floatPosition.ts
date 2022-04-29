import { LocalStorage, LocalStorageKeys } from "..";

const setFloatPosition = (floatPosition: {
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

const getFloatPosition = (): Promise<{ x: number; y: number }> => {
  const keys: LocalStorageKeys[] = ["floatPosition"];
  return new Promise((resolve) => {
    chrome.storage.local.get(keys, (res: LocalStorage) => {
      resolve(res.floatPosition ?? { x: 12, y: 12 });
    });
  });
};

export const storageFloatPosition = { getFloatPosition, setFloatPosition };
