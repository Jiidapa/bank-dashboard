export const fetchDebitCards = async () => {
  const response = await fetch("/api/debit-cards");

  if (!response.ok) {
    throw new Error("Fetch recent debit cards failed");
  }

  return response.json();
};
