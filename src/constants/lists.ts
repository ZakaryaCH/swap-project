// used to mark unsupported tokens, these are hosted lists of unsupported tokens
/**
 * @TODO add list from blockchain association
 */
export const UNSUPPORTED_LIST_URLS: string[] = [];

const BORGSWAP = "https://api.borgswap.exchange/tokens.json";

// lower index == higher priority for token import
export const DEFAULT_LIST_OF_LISTS: string[] = [
  BORGSWAP,
  ...UNSUPPORTED_LIST_URLS, // need to load unsupported tokens as well
];

// default lists to be 'active' aka searched across
export const DEFAULT_ACTIVE_LIST_URLS: string[] = [BORGSWAP];
