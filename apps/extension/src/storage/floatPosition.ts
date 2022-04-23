import { LocalStorage, LocalStorageKeys } from ".";

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
