import * as Bip39 from "bip39";
import { Keypair } from "@solana/web3.js";
import { derivePath } from "ed25519-hd-key";

export const generateSeedWords = Bip39.generateMnemonic;

export const deriveNewAccountFromMnemonic = (
  index: number,
  mnemonic: string,
  password?: string
): { index: number; publicKey: string } => {
  const seed = Bip39.mnemonicToSeedSync(mnemonic, password);
  const path = `m/44'/501'/0'/${index}'`;
  const keypair = Keypair.fromSeed(derivePath(path, seed.toString("hex")).key);
  return { index, publicKey: keypair.publicKey.toBase58() };
};

export const abbrevPublicKey = (publicKey: string) => {
  return `${publicKey.slice(0, 4)}...${publicKey.slice(-4)}`;
};
