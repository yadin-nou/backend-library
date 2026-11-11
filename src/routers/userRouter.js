import express from "express";
import {
  adminAuthMiddleware,
  userMiddleWare,
} from "../middleware/authMiddleware.js";
import {
  getAllUsersController,
  getPrfileController,
} from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.get("/profile", userMiddleWare, getPrfileController);

userRouter.get(
  "/all",
  userMiddleWare,
  adminAuthMiddleware,
  getAllUsersController,
);
export default userRouter;
