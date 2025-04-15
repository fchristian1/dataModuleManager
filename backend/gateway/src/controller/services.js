export const servicesController = (Services) => async (req, res) => {
  const version = req.params[0];
  const service = Services.find((s) => s.name === req.params[1]);
  const path = req.params[2];
  const method = req.method;
  const body = req.body;
  const headers = req.headers;

  if (!service) {
    return res.status(404).json({ message: "Service not found" });
  }

  const cleanedPath = path ? `/${path}` : "";
  const url = `${service.url}/api/v${version}${cleanedPath}`;

  if (process.env.NODE_ENV !== "production") {
    console.log("Request URL:", url);
    console.log("Request Method:", method);
    console.log("Request Body:", body);
  }

  try {
    const fetchOptions = {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: headers.authorization, // Optional
      },
    };

    if (method !== "GET") {
      fetchOptions.body = JSON.stringify(body);
    }

    const response = await fetch(url, fetchOptions);
    let data;

    try {
      data = await response.json();
    } catch {
      const text = await response.text();
      data = { raw: text };
    }

    res.status(response.status).json({ data });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
