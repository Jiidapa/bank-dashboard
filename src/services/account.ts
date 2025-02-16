export const fetchAccounts = async () => {
  const response = await fetch("/api/accounts");

  if (!response.ok) {
    throw new Error("Fetch accounts failed");
  }

  return response.json();
};
