import { checkHealth } from "../common/checkHealth.js";

export const healthController = (Services) => async (req, res) => {
  let healthStatus = [];
  for (const service of Services) {
    const { name, url } = service;

    const isHealthy = await checkHealth(url + "/health");
    healthStatus.push({ [name]: isHealthy });
  }
  res.status(200).json({
    message: "OK",
    timestamp: Date.now(),
    servicesStatus: healthStatus,
  });
};
