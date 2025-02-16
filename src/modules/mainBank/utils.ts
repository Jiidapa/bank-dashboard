const capitalizeAndFormat = (match: string) => {
  return match.toUpperCase().replace("-", " ");
};

export const toTitleCase = (input: string): string => {
  return input.replace(/(^\w|-\w)/g, capitalizeAndFormat);
};

export const currencySymbols: Record<string, string> = {
  THB: "฿",
  USD: "$",
  JPY: "¥",
};

export const getCurrencySymbol = (currencyCode: string): string => {
  return currencySymbols[currencyCode] || currencyCode;
};

export const formatAccountAmount = (
  currency: string,
  amount: number
): string => {
  const symbol = getCurrencySymbol(currency);
  const formattedAmount = amount.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return `${symbol}${formattedAmount}`;
};
