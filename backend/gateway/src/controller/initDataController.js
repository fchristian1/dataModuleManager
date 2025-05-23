export const initDataController = (Services) => async (req, res) => {
  console.log("from host", req.hostname);
  res.send({
    message: "OK",
    timestamp: Date.now(),
    services: Services.map((service) => {
      const { name, extUrl } = service;
      return { name, url: extUrl };
    }),
    links: {
      login: { service: "auth", path: "/login" },
      register: { service: "auth", path: "/register" },
      startViewLink: { service: "view", path: "/id/home" },
    },
  });
};
