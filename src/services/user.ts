export const fetchUser = async () => {
  const response = await fetch("/api/user");

  if (!response.ok) {
    throw new Error("Get user failed");
  }

  return response.json();
};
