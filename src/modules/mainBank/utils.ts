const capitalizeAndFormat = (match: string) => {
  return match.toUpperCase().replace("-", " ");
};

export const toTitleCase = (input: string): string => {
  return input.replace(/(^\w|-\w)/g, capitalizeAndFormat);
};


export const currencySymbols: Record<string, string> = {
  THB: '฿',
  USD: '$',
  JPY: '¥',
};

export const getCurrencySymbol = (currencyCode: string): string => {
  return currencySymbols[currencyCode] || currencyCode;
}