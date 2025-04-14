import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.all("/health", (req, res) => {
  res.status(200).json({ message: "OK" });
});
app.get("/api/v1/", (req, res) => {
  res.status(200).json({ message: "OK" });
});
app.use((req, res) => {
  res.status(404).json({ message: "nOK" });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
