export const maskNumber = (number: string): string => {
  return number.replace(/^(\d{4} \d{2})\d{2} (\d{4}) (\d{4})$/, "$1•• •••• $3");
};
