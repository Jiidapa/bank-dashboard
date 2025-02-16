export const fetchRecentTransaction = async () => {
  const response = await fetch("/api/transaction/recent");

  if (!response.ok) {
    throw new Error("Fetch recent transaction failed");
  }

  return response.json();
};
