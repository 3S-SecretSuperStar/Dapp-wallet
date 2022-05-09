export type Blockchain = "eth" | "sol";

export type EthNetwork =
  | "mainnet"
  | "ropsten"
  | "rinkeby"
  | "goerli"
  | "kovan"
  | "localhost";

export type SolNetwork = "mainnet-beta" | "testnet" | "devnet" | "localhost";

export interface ColorSet {
  bg: string;
  fg: string;
}

export interface CryptoKeypair {
  pathIndex: number;
  publicKey: string;
  privateKey: string;
  nickname?: string;
}

export interface CryptoWallet {
  mnemonic: string;
  blockchain: Blockchain;
  accounts: CryptoKeypair[];
  mainAccount: CryptoKeypair;
}

export interface UserInfo {
  wallets: CryptoWallet[];
  password: string;
  username: string;
}

export interface Transaction {
  blockchain: Blockchain;
  txId: string;
  from: string;
  to: string;
  amount: number;
  message: string;
}

export interface TestWallet {
  blockchain: Blockchain;
  address: string;
  balance: number;
  transactions: Transaction[];
  nickname: string;
  avatar: string;
  colorSet: ColorSet;
}

export type EthApiProvider = "infura" | "alchemy" | "etherscan";

export interface EthApiProviderKey {
  provider: EthApiProvider;
  apiKey: string;
}
