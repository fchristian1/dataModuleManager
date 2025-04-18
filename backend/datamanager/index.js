import express from "express";
import cors from "cors";
import dataRouter from "./src/dataRouter.js";
import { MongoClient } from "mongodb";

const mongoUrl = process.env.MONGO_URL;
const mongoClient = new MongoClient(mongoUrl);
const app = express();
app.use(cors());
app.use(express.json());

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.all("/health", (req, res) => {
  res.status(200).json({ message: "OK" });
});

app.use("/api/v1", dataRouter(mongoClient));

app.use((req, res) => {
  res.status(404).json({ message: "nOK" });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
