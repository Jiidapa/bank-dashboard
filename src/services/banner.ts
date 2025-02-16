export const fetchBanners = async () => {
  const response = await fetch("/api/banners");

  if (!response.ok) {
    throw new Error("Fetch recent debit cards failed");
  }

  return response.json();
};
