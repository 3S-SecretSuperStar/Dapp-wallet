export type Blockchain = "eth" | "sol";

export interface CryptoKeypair {
  pathIndex: number;
  publicKey: string;
  privateKey: string;
}

export interface CryptoWallet {
  mnemonic: string;
  blockchain: Blockchain;
  accounts: CryptoKeypair[];
}

export interface UserInfo {
  wallets: CryptoWallet[];
  password: string;
  username: string;
}
