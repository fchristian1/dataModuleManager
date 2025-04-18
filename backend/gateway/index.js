import express, { json } from "express";
import cors from "cors";
import { healthController } from "./src/controller/health.js";
import { servicesController } from "./src/controller/services.js";
import { initDataController } from "./src/controller/initDataController.js";
const url = "http://localhost:3000";
const ServcieNames = ["auth", "data", "module", "view", "frontend_modules"];
const Services = ServcieNames.map((name) => {
  return {
    name,
    url: `http://dmm_backend_${name}:3000`,
    extUrl: `${url}/api/v1/${name}`,
  };
});

const app = express();
app.use(json());
app.use(cors());
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
app.all("/health", healthController(Services));

// erklärung /^\/api\/v(\d+)\/([^\/]+)\/?(.*)?/
// ^ - Anfang des Strings
// \/api\/v - Der String muss mit "/api/v" beginnen
// (\d+) - Danach folgt eine Zahl (Version)
// \/ - Danach folgt ein "/" (der Slash muss escaped werden)
// ([^\/]+) - Danach folgt ein beliebiger String (Name des Services)
// \/ - Danach folgt ein "/" (der Slash muss escaped werden)
// ? - Der Slash ist optional
// (.*)? - Danach folgt ein beliebiger String (Pfad)
// $ - Ende des Strings
// Beispiel: /api/v1/datamanager/login
// Beispiel: /api/v1/module/
// Beispiel: /api/v1/view/
app.get("/api/v1/init_data", initDataController(Services));
app.all(/^\/api\/v(\d+)\/([^\/]+)\/?(.*)?/, servicesController(Services));

app.use((req, res) => {
  res.status(404).json({ message: "nOK" });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
