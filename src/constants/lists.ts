// used to mark unsupported tokens, these are hosted lists of unsupported tokens
/**
 * @TODO add list from blockchain association
 */
export const UNSUPPORTED_LIST_URLS: string[] = [];

const BORGSWAP = "https://api.borgswap.exchange/tokens.json";
const PANCAKESWAP =
  "https://gateway.pinata.cloud/ipfs/QmdKy1K5TMzSHncLzUXUJdvKi1tHRmJocDRfmCXxW5mshS";
const VENUS = "https://tokens.venus.io";
const SWIPE = "https://tokens.swipe.org/";

// lower index == higher priority for token import
export const DEFAULT_LIST_OF_LISTS: string[] = [
  BORGSWAP,
  PANCAKESWAP,
  VENUS,
  SWIPE,
  ...UNSUPPORTED_LIST_URLS, // need to load unsupported tokens as well
];

// default lists to be 'active' aka searched across
export const DEFAULT_ACTIVE_LIST_URLS: string[] = [PANCAKESWAP];
