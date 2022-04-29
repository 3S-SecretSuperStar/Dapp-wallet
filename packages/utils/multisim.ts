import * as ETH from "ethers";
import * as SOL from "@solana/web3.js";
import * as bs58 from "bs58";
import { Blockchain, TestWallet } from "types";

const randomAvatar = () => {
  const randIndex = Math.floor(Math.random() * 10);
  return `/images/avatars/${randIndex}.png`;
};

/**
 * Generate random wallets for multi-peer simulation.
 *
 * @param num - Number of wallets to generate. Default is one.
 * @param blockchain - A type of blockchain.
 * @returns A list of randomly generated wallets.
 */
export const createRandomWallet = (
  num: number = 1,
  blockchain: Blockchain
): TestWallet[] => {
  const iter = Array(num);
  switch (blockchain) {
    case "eth":
      return iter.map((_item) => {
        const { publicKey, privateKey } = ETH.Wallet.createRandom();
        return {
          publicKey,
          privateKey,
          nickname: "Test User",
          avatar: randomAvatar(),
        };
      });
    case "sol":
      return iter.map((_item) => {
        const keypair = SOL.Keypair.generate();
        return {
          publicKey: keypair.publicKey.toBase58(),
          privateKey: bs58.encode(keypair.secretKey),
          nickname: "Test User",
          avatar: randomAvatar(),
        };
      });
  }
};
