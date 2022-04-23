// Type declaration
export type SolanaNetwork = "Mainnet" | "Testnet" | "Devnet" | "Localhost";
export interface HDAccount {
  index: number;
  publicKey: string;
}
export type LocalStorageKeys = keyof LocalStorage;
export interface LocalStorage {
  floatPosition?: { x: number; y: number };
  solanaNetwork?: SolanaNetwork;
  userMnemonic?: string;
  userAccounts?: HDAccount[];
}

// Exports
import * as FloatPositionStorage from "./floatPosition";
import * as SolanaNetworkStorage from "./solanaNetwork";
import * as UserAccountsStorage from "./userAccounts";
import * as UserMnemonicStorage from "./userMnemonic";

export default {
  FloatPositionStorage,
  SolanaNetworkStorage,
  UserAccountsStorage,
  UserMnemonicStorage,
};
