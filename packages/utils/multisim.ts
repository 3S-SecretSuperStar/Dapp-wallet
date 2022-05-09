import * as ETH from "ethers";
import * as SOL from "@solana/web3.js";
import { Blockchain, TestWallet } from "types";
import { BgFgColors, ShortNames } from "./contants";

/**
 * Picks a random color set from `BgFgColors`.
 *
 * @returns A color set.
 */
export const randomColorSet = () => {
  const randIndex = Math.floor(Math.random() * BgFgColors.length);
  return BgFgColors[randIndex];
};

/**
 * Picks a random avatar image path.
 *
 * @returns A avatar image path.
 */
export const randomAvatar = () => {
  const randIndex = Math.floor(Math.random() * 10);
  return `/images/avatars/${randIndex}.png`;
};

export const randomName = () => {
  const randIndex = Math.floor(Math.random() * ShortNames.length);
  return ShortNames[randIndex];
};

/**
 * Generate random wallet for multi-peer simulation.
 *
 * @param blockchain - A type of blockchain.
 * @returns A randomly generated wallet.
 */
export const createRandomWallet = async (
  blockchain: Blockchain
): Promise<TestWallet> => {
  switch (blockchain) {
    case "eth":
      const { address } = ETH.Wallet.createRandom();
      return {
        blockchain: "eth",
        balance: 0,
        transactions: [],
        address,
        nickname: randomName(),
        avatar: randomAvatar(),
        colorSet: randomColorSet(),
      };
    case "sol":
      const keypair = SOL.Keypair.generate();
      return {
        blockchain: "sol",
        balance: 0,
        transactions: [],
        address: keypair.publicKey.toBase58(),
        nickname: randomName(),
        avatar: randomAvatar(),
        colorSet: randomColorSet(),
      };
  }
};
