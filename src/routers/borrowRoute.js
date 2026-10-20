import express from "express";
import {
  adminAuthMiddleware,
  userMiddleWare,
} from "../middleware/authMiddleware.js";
import {
  getAllBorrowsController,
  inserNewBorrow,
} from "../controllers/borrowController.js";

const borrowRouter = express.Router();

borrowRouter.post("/borrows", userMiddleWare, inserNewBorrow);
//return all borrows for admin request only
//check userMiddleware first, then check is admin or not
borrowRouter.get(
  "/admin",
  userMiddleWare,
  adminAuthMiddleware,
  getAllBorrowsController,
);
//return all borrows for user request only
borrowRouter.get("/user", userMiddleWare, getAllBorrowsController);

export default borrowRouter;
