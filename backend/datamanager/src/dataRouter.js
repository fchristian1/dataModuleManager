import { Router } from "express";
import dataController from "./dataController.js";

const dataRouter = (mongoClient) => {
  const r = Router();
  const { getData, getDataById, setData } = dataController(mongoClient);
  r.get("/:db/:collection", getData);
  r.get("/:db/:collection/:id", getDataById);
  r.post("/:db/:collection", setData);

  return r;
};

export default dataRouter;
