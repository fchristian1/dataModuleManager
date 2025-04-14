export const servicesController = (Services) => async (req, res) => {
  const version = req.params[0]; // z.B. "1"
  const service = Services.find((s) => s.name === req.params[1]); // z.B. "datamanager", "module" oder "view"
  const path = req.params[2]; // z.B. "login" oder leer
  const method = req.method; // z.B. "POST"
  const body = req.body; // z.B. { username: "user", password: "pass" }
  const headers = req.headers; // z.B. { "Content-Type": "application/json" }

  try {
    const url = `${service.url}/api/v${version}/${path ? path : ""}`;
    console.log("Request URL:", url);
    const response =
      service &&
      (await fetch(url, {
        method,
        headers: {
          ...headers,
          "Content-Type": "application/json",
        },
        body: body ? JSON.stringify(body) : undefined,
      }));

    const data = { data: await response.json() };
    res.status(response.status).json(data);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
