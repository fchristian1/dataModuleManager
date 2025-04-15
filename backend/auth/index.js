import express, { json, text } from "express";
import cors from "cors";
import { authRouter } from "./src/authRoutes.js";

const app = express();
app.use(json());
app.use(cors());

app.all("/health", (req, res) => {
  res.status(200).json({ message: "OK" });
});
app.get("/api/v1/", (req, res) => {
  res.status(200).json({ message: "OK" });
});
app.use((req, res, next) => {
  console.log(req.body);
  next();
});

app.use("/api/v1", authRouter());

app.use((req, res) => {
  res.status(404).json({ message: "nOK" });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
