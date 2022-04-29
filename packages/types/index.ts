export type Blockchain = "eth" | "sol";

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

export interface TestWallet {
  publicKey: string;
  privateKey: string;
  nickname: string;
  avatar: string;
}
