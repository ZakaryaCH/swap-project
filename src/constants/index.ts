import { JSBI, Percent, Token, ChainId } from "@uniswap/sdk";
import { AbstractConnector } from "@web3-react/abstract-connector";

import {
  fortmatic,
  bsc,
  portis,
  walletconnect,
  walletlink,
} from "../connectors";

export const ROUTER_ADDRESS = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D";

// export const ROUTER_ADDRESS = '0xa743c67f4c888713534BDC6b25C3CF41aD3B4Bc6'

export const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";

export { PRELOADED_PROPOSALS } from "./proposals";

// a list of tokens by chain
type ChainTokenList = {
  readonly [chainId in ChainId]: Token[];
};

export const ETH = new Token(
  ChainId.MAINNET,
  "0x2170ed0880ac9a755fd29b2688956bd959f933f8",
  18,
  "ETH",
  "Ethereum Token"
);

export const ADA = new Token(
  ChainId.MAINNET,
  "0x3ee2200efb3400fabb9aacf31297cbdd1d435d47",
  18,
  "ADA",
  "Cardano Token"
);

export const BSCUSD = new Token(
  ChainId.MAINNET,
  "0x55d398326f99059ff775485246999027b3197955",
  18,
  "BSC",
  "BSC//USD"
);
export const WBNB = new Token(
  ChainId.MAINNET,
  "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
  18,
  "WBNB",
  "Binance Wrapped"
);
export const XRP = new Token(
  ChainId.MAINNET,
  "0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe",
  9,
  "XRP",
  "XRP Token"
);
export const DOT = new Token(
  ChainId.MAINNET,
  "0x7083609fce4d1d8dc0c979aab8c869ea2c873402",
  18,
  "DOT",
  "Polkadot Token"
);
export const POGO = new Token(
  ChainId.MAINNET,
  "0x553B3De469EA8A9940C5549D170f541409b05DD4",
  18,
  "POGO",
  "PogoSwap Token"
);

export const TETH = new Token(
  ChainId.TESTNET,
  "0x2170ed0880ac9a755fd29b2688956bd959f933f8",
  18,
  "ETH",
  "Ethereum Token"
);

export const TADA = new Token(
  ChainId.TESTNET,
  "0x3ee2200efb3400fabb9aacf31297cbdd1d435d47",
  18,
  "ADA",
  "Cardano Token"
);

export const TBSCUSD = new Token(
  ChainId.TESTNET,
  "0x55d398326f99059ff775485246999027b3197955",
  18,
  "BSC",
  "BSC//USD"
);
export const TWBNB = new Token(
  ChainId.TESTNET,
  "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
  18,
  "WBNB",
  "Binance Wrapped"
);
export const TXRP = new Token(
  ChainId.TESTNET,
  "0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe",
  9,
  "XRP",
  "XRP Token"
);
export const TDOT = new Token(
  ChainId.TESTNET,
  "0x7083609fce4d1d8dc0c979aab8c869ea2c873402",
  18,
  "DOT",
  "Polkadot Token"
);
export const TPOGO = new Token(
  ChainId.TESTNET,
  "0x553B3De469EA8A9940C5549D170f541409b05DD4",
  18,
  "POGO",
  "PogoSwap Token"
);

// Block time here is slightly higher (~1s) than average in order to avoid ongoing proposals past the displayed time
export const AVERAGE_BLOCK_TIME_IN_SECS = 13;
export const PROPOSAL_LENGTH_IN_BLOCKS = 40_320;
export const PROPOSAL_LENGTH_IN_SECS =
  AVERAGE_BLOCK_TIME_IN_SECS * PROPOSAL_LENGTH_IN_BLOCKS;

export const GOVERNANCE_ADDRESS = "0x5e4be8Bc9637f0EAA1A755019e06A68ce081D58F";

export const TIMELOCK_ADDRESS = "0x1a9C8182C09F50C8318d769245beA52c32BE35BC";

const UNI_ADDRESS = "0xc7A8df971177bBF202431563A2b7c73dA2e9eCfD";

export const UNI: { [chainId in ChainId]: Token } = {
  [ChainId.MAINNET]: new Token(
    ChainId.MAINNET,
    UNI_ADDRESS,
    18,
    "UNI",
    "Uniswap"
  ),
  [ChainId.TESTNET]: new Token(
    ChainId.TESTNET,
    UNI_ADDRESS,
    18,
    "UNI",
    "Uniswap"
  ),
};

export const COMMON_CONTRACT_NAMES: { [address: string]: string } = {
  [UNI_ADDRESS]: "UNI",
  [GOVERNANCE_ADDRESS]: "Governance",
  [TIMELOCK_ADDRESS]: "Timelock",
};

// TODO: specify merkle distributor for mainnet
export const MERKLE_DISTRIBUTOR_ADDRESS: { [chainId in ChainId]?: string } = {
  [ChainId.MAINNET]: "0x090D4613473dEE047c3f2706764f49E0821D256e",
};

// used to construct intermediary pairs for trading
export const BASES_TO_CHECK_TRADES_AGAINST: ChainTokenList = {
  [ChainId.MAINNET]: [ETH, ADA, BSCUSD, WBNB, XRP, DOT, POGO],
  [ChainId.TESTNET]: [TETH, TADA, TBSCUSD, TWBNB, TXRP, TDOT, TPOGO],
};

/**
 * Some tokens can only be swapped via certain pairs, so we override the list of bases that are considered for these
 * tokens.
 */
export const CUSTOM_BASES: {
  [chainId in ChainId]?: { [tokenAddress: string]: Token[] };
} = {
  [ChainId.MAINNET]: {
    [XRP.address]: [ETH, XRP],
  },
};

// used for display in the default list when adding liquidity
export const SUGGESTED_BASES: ChainTokenList = {
  [ChainId.MAINNET]: [ETH, ADA, BSCUSD, WBNB, XRP, DOT, POGO],
  [ChainId.TESTNET]: [TETH, TADA, TBSCUSD, TWBNB, TXRP, TDOT, TPOGO],
};

// used to construct the list of all pairs we consider by default in the frontend
export const BASES_TO_TRACK_LIQUIDITY_FOR: ChainTokenList = {
  [ChainId.MAINNET]: [ETH, ADA, BSCUSD, WBNB, XRP, DOT, POGO],
  [ChainId.TESTNET]: [TETH, TADA, TBSCUSD, TWBNB, TXRP, TDOT, TPOGO],
};

export const PINNED_PAIRS: {
  readonly [chainId in ChainId]?: [Token, Token][];
} = {
  [ChainId.MAINNET]: [
    [ETH, BSCUSD],
    [ADA, BSCUSD],
    [WBNB, BSCUSD],
    [XRP, BSCUSD],
    [DOT, BSCUSD],
    [POGO, BSCUSD],
  ],
};

export interface WalletInfo {
  connector?: AbstractConnector;
  name: string;
  iconName: string;
  description: string;
  href: string | null;
  color: string;
  primary?: true;
  mobile?: true;
  mobileOnly?: true;
}

export const SUPPORTED_WALLETS: { [key: string]: WalletInfo } = {
  INJECTED: {
    connector: bsc,
    name: "Injected",
    iconName: "arrow-right.svg",
    description: "Injected web3 provider.",
    href: null,
    color: "#010101",
    primary: true,
  },
  METAMASK: {
    connector: bsc,
    name: "MetaMask",
    iconName: "metamask.png",
    description: "Easy-to-use browser extension.",
    href: null,
    color: "#E8831D",
  },
  WALLET_CONNECT: {
    connector: walletconnect,
    name: "WalletConnect",
    iconName: "walletConnectIcon.svg",
    description: "Connect to Trust Wallet, Rainbow Wallet and more...",
    href: null,
    color: "#4196FC",
    mobile: true,
  },
  WALLET_LINK: {
    connector: walletlink,
    name: "Coinbase Wallet",
    iconName: "coinbaseWalletIcon.svg",
    description: "Use Coinbase Wallet app on mobile device",
    href: null,
    color: "#315CF5",
  },
  COINBASE_LINK: {
    name: "Open in Coinbase Wallet",
    iconName: "coinbaseWalletIcon.svg",
    description: "Open in Coinbase Wallet app.",
    href: "https://go.cb-w.com/mtUDhEZPy1",
    color: "#315CF5",
    mobile: true,
    mobileOnly: true,
  },
  FORTMATIC: {
    connector: fortmatic,
    name: "Fortmatic",
    iconName: "fortmaticIcon.png",
    description: "Login using Fortmatic hosted wallet",
    href: null,
    color: "#6748FF",
    mobile: true,
  },
  Portis: {
    connector: portis,
    name: "Portis",
    iconName: "portisIcon.png",
    description: "Login using Portis hosted wallet",
    href: null,
    color: "#4A6C9B",
    mobile: true,
  },
};

export const NetworkContextName = "NETWORK";

// default allowed slippage, in bips
export const INITIAL_ALLOWED_SLIPPAGE = 50;
// 20 minutes, denominated in seconds
export const DEFAULT_DEADLINE_FROM_NOW = 60 * 20;

// used for rewards deadlines
export const BIG_INT_SECONDS_IN_WEEK = JSBI.BigInt(60 * 60 * 24 * 7);

export const BIG_INT_ZERO = JSBI.BigInt(0);

// one basis point
export const ONE_BIPS = new Percent(JSBI.BigInt(1), JSBI.BigInt(10000));
export const BIPS_BASE = JSBI.BigInt(10000);
// used for warning states
export const ALLOWED_PRICE_IMPACT_LOW: Percent = new Percent(
  JSBI.BigInt(100),
  BIPS_BASE
); // 1%
export const ALLOWED_PRICE_IMPACT_MEDIUM: Percent = new Percent(
  JSBI.BigInt(300),
  BIPS_BASE
); // 3%
export const ALLOWED_PRICE_IMPACT_HIGH: Percent = new Percent(
  JSBI.BigInt(500),
  BIPS_BASE
); // 5%
// if the price slippage exceeds this number, force the user to type 'confirm' to execute
export const PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN: Percent = new Percent(
  JSBI.BigInt(1000),
  BIPS_BASE
); // 10%
// for non expert mode disable swaps above this
export const BLOCKED_PRICE_IMPACT_NON_EXPERT: Percent = new Percent(
  JSBI.BigInt(1500),
  BIPS_BASE
); // 15%

// used to ensure the user doesn't send so much ETH so they end up with <.01
export const MIN_ETH: JSBI = JSBI.exponentiate(
  JSBI.BigInt(10),
  JSBI.BigInt(16)
); // .01 ETH
export const BETTER_TRADE_LESS_HOPS_THRESHOLD = new Percent(
  JSBI.BigInt(50),
  JSBI.BigInt(10000)
);

export const ZERO_PERCENT = new Percent("0");
export const ONE_HUNDRED_PERCENT = new Percent("1");

// SDN OFAC addresses
export const BLOCKED_ADDRESSES: string[] = [
  "0x7F367cC41522cE07553e823bf3be79A889DEbe1B",
  "0xd882cFc20F52f2599D84b8e8D58C7FB62cfE344b",
  "0x901bb9583b24D97e995513C6778dc6888AB6870e",
  "0xA7e5d5A720f06526557c513402f2e6B5fA20b008",
];
