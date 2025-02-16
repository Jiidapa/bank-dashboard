const capitalizeAndFormat = (match: string) => {
  return match.toUpperCase().replace("-", " ");
};

export const toTitleCase = (input: string): string => {
  return input.replace(/(^\w|-\w)/g, capitalizeAndFormat);
};
