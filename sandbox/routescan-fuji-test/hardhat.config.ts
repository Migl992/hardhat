import hardhatVerify from "@nomicfoundation/hardhat-verify";
import hardhatIgnition from "@nomicfoundation/hardhat-ignition";
import type { HardhatUserConfig } from "hardhat/config";

const config: HardhatUserConfig = {
  plugins: [hardhatVerify,  hardhatIgnition],

  solidity: {
    compilers: [
      {
        version: "0.8.30",
        settings: {
          optimizer: { enabled: false }, // you said no optimization
          viaIR: false,                  // be explicit
        },
      },
    ],
  },

  networks: {
    sepolia: {
      type: "http",
      url: process.env.SEPOLIA_RPC!,
      chainId: 11155111,
      accounts: [process.env.PRIVATE_KEY!],
    },
    fuji: {
      type: "http",
      url: process.env.FUJI_RPC!,
      chainId: 43113,
      accounts: [process.env.PRIVATE_KEY!],
    },
  },

  verify: { routescan: { enabled: true } },
};

export default config;
