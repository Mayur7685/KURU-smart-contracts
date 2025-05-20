import "@nomiclabs/hardhat-ethers"

export default {
  solidity: {
    version: "0.8.16",
    settings: {
      viaIR: true,
      optimizer: {
        enabled: true,
        runs: 100,
      },
    },
  },
  networks: {
    neroTestnet: {
      url: "https://rpc-testnet.nerochain.io", // Update this with the actual RPC URL if available
      chainId: 689,
      gasPrice: 20000000000,
      accounts: ["PRIVATE_KEY"],
    },
  },
}

// Deployed a smart contract...
// { KURUkshetra: '0x43e27EDe4C2BFA9432b91afD603d3aeecc5052bB' }
