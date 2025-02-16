export const fetchRecentTransaction = async () => {
  const response = await fetch("/api/transaction/recent");

  if (!response.ok) {
    throw new Error("Fet recent transaction failed");
  }

  return response.json();
};
