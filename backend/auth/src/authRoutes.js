import { Router } from "express";
import authController from "./authController.js";

export const authRouter = () => {
  const r = Router();
  r.all("/login", authController().login);
  return r;
};
