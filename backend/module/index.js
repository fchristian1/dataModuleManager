import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.all("/health", (req, res) => {
  res.status(200).json({ message: "OK" });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
