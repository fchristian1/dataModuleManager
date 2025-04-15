import { Router } from "express";

export const authRouter = () => {
  const r = Router();
  r.all("/login", (req, res) => {
    console.log("login", req.body);
    res.send({ message: "OK", timestamp: Date.now() });
  });
  return r;
};
