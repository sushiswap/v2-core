import "dotenv/config";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-ethers";
import "hardhat-deploy";

const accounts = {
  mnemonic:
    process.env.MNEMONIC ||
    "test test test test test test test test test test test junk",
  accountsBalance: "990000000000000000000",
};

const config = {
  networks: {
    base: {
      url: "https://developer-access-mainnet.base.org",
      accounts,
      chainId: 8453,
      live: true,
      saveDeployments: true,
    },
    kava: {
      url: 'https://evm.kava.io',
      accounts,
      chainId: 2222,
      live: true,
      saveDeployments: true,
    },
    metis: {
      url: 'https://andromeda.metis.io/?owner=1088',
      accounts,
      chainId: 1088,
      live: true,
      saveDeployments: true,
    },
    linea: {
      url: 'https://rpc.linea.build',
      accounts,
      chainId: 59144,
      live: true,
      saveDeployments: true,
    },
    optimism: {
      url: 'https://mainnet.optimism.io',
      accounts,
      chainId: 10,
      live: true,
      saveDeployments: true,
    },
    bttc: {
      url: 'https://rpc.bittorrentchain.io',
      accounts,
      chainId: 199,
      live: true,
      saveDeployments: true,
    },
    polygonzkevm: {
      url: 'https://zkevm-rpc.com',
      accounts,
      chainId: 1101,
      live: true,
      saveDeployments: true,
    },
    thundercore: {
      url: 'https://mainnet-rpc.thundertoken.net',
      accounts,
      chainId: 108,
      live: true,
      saveDeployments: true,
    },
    core: {
      url: 'https://rpc.coredao.org',
      accounts,
      chainId: 1116,
      live: true,
      saveDeployments: true,
    },
    scroll: {
      url: 'https://rpc.scroll.io/',
      accounts,
      chainId: 534352,
      live: true,
      saveDeployments: true,
    }
  },
  namedAccounts: {
    // e.g. ledger://0x18dd4e0Eb8699eA4fee238dE41ecF115e32272F8
    deployer: process.env.LEDGER || { default: 0 },
    alice: {
      default: 1,
    },
    bob: {
      default: 2,
    },
    carol: {
      default: 3,
    },
    dev: {
      default: 4,
    },
    feeTo: {
      default: 5,
    },
  },

  solidity: {
    compilers: [
      {
        version: "0.6.12",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },

  etherscan: {
    customChains: [
      {
        network: 'kava',
        chainId: 2222,
        urls: {
          apiURL: 'https://explorer.kava.io/api',
          browserURL: 'https://explorer.kava.io',
        },
      },
      {
        network: 'metis',
        chainId: 1088,
        urls: {
          apiURL: 'https://andromeda-explorer.metis.io/api',
          browserURL: 'https://andromeda-explorer.metis.io',
        },
      },
      {
        network: 'linea',
        chainId: 59144,
        urls: {
          apiURL: 'https://api.lineascan.build/api',
          browserURL: 'https://lineascan.build',
        },
      },
      {
        network: 'bttc',
        chainId: 199,
        urls: {
          apiURL: 'https://api.bttcscan.com/api',
          browserURL: 'https://bttcscan.com/',
        },
      },
      {
        network: 'polygonzkevm',
        chainId: 1101,
        urls: {
          apiURL: 'https://api-zkevm.polygonscan.com/api',
          browserURL: 'https://zkevm.polygonscan.com/',
        }
      },
      {
        network: 'scroll',
        chainId: 534352,
        urls: {
          apiURL: 'https://api.scrollscan.com/api',
          browserURL: 'https://scrollscan.com/',
        }
      }
    ],
    apiKey: {
      mainnet: process.env.ETHERSCAN_API_KEY || '',
      ropsten: process.env.ETHERSCAN_API_KEY || '',
      rinkeby: process.env.ETHERSCAN_API_KEY || '',
      goerli: process.env.ETHERSCAN_API_KEY || '',
      kovan: process.env.ETHERSCAN_API_KEY || '',
      // binance smart chain
      bsc: process.env.BSCSCAN_API_KEY || '',
      bscTestnet: process.env.BSCSCAN_API_KEY || '',
      // huobi eco chain
      heco: process.env.HECOINFO_API_KEY || '',
      hecoTestnet: process.env.HECOINFO_API_KEY || '',
      // fantom mainnet
      opera: process.env.FTMSCAN_API_KEY || '',
      ftmTestnet: process.env.FTMSCAN_API_KEY || '',
      // optimism
      optimisticEthereum: process.env.OPTIMISTIC_ETHERSCAN_API_KEY || '',
      // optimisticKovan: process.env.OPTIMISTIC_ETHERSCAN_API_KEY || '',
      // polygon
      polygon: process.env.POLYGONSCAN_API_KEY || '',
      polygonMumbai: process.env.POLYGONSCAN_API_KEY || '',
      // arbitrum
      arbitrumOne: process.env.ARBISCAN_API_KEY || '',
      arbitrumTestnet: process.env.ARBISCAN_API_KEY || '',
      // avalanche
      avalanche: process.env.SNOWTRACE_API_KEY || '',
      avalancheFujiTestnet: process.env.SNOWTRACE_API_KEY || '',
      // moonbeam
      moonbeam: process.env.MOONBEAM_MOONSCAN_API_KEY || '',
      moonriver: process.env.MOONRIVER_MOONSCAN_API_KEY || '',
      moonbaseAlpha: process.env.MOONBASE_MOONSCAN_API_KEY || '',
      // harmony
      harmony: process.env.HARMONY_API_KEY || '',
      harmonyTest: process.env.HARMONY_API_KEY || '',
      // xdai and sokol don't need an API key, but you still need
      // to specify one; any string placeholder will work
      xdai: 'api-key',
      sokol: 'api-key',
      aurora: 'api-key',
      auroraTestnet: 'api-key',
      metis: 'api-key',
      kava: 'api-key',
      // bobaAvax: 'api-key',
      bttc: process.env.BTTC_API_KEY || '',
      gnosis: process.env.GNOSIS_API_KEY || '',
      linea: process.env.LINEA_API_KEY || '',
      polygonzkevm: process.env.POLYGON_ZKEVM_API_KEY || '',
      scroll: process.env.SCROLL_API_KEY || ''
    },
  },
};

export default config;
