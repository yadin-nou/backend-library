import express from "express";
import { userMiddleWare } from "../middleware/authMiddleware.js";
import { responseClient } from "../middleware/responseClient.js";
import { inserNewBorrow } from "../controllers/borrowController.js";

const borrowRouter = express.Router();

borrowRouter.post("/borrows", userMiddleWare, inserNewBorrow);

export default borrowRouter;
