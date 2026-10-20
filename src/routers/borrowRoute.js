import express from "express";
import {
  adminAuthMiddleware,
  userMiddleWare,
} from "../middleware/authMiddleware.js";
import { responseClient } from "../middleware/responseClient.js";
import { inserNewBorrow } from "../controllers/borrowController.js";

const borrowRouter = express.Router();

borrowRouter.post("/borrows", userMiddleWare, inserNewBorrow);
//return all borrows for admin request only
borrowRouter.get("/admin", adminAuthMiddleware);
//return all borrows for user request only
borrowRouter.get("/user", userMiddleWare);

export default borrowRouter;
