export const fetchBanners = async () => {
  const response = await fetch("/api/banners");

  if (!response.ok) {
    throw new Error("Fetch banners failed");
  }

  return response.json();
};
