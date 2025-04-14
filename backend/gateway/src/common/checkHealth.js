export const checkHealth = async (healthUrl) => {
  try {
    const response = await fetch(healthUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      console.error("Health check failed:", response.statusText);
      return false;
    }

    const data = await response.json();
    if (data.message !== "OK") {
      return false;
    }
    return true;
  } catch (error) {
    console.error("Error during health check:", error);
    return false;
  }
};
