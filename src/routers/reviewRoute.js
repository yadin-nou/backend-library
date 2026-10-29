import express from "express";
import {
  adminAuthMiddleware,
  userMiddleWare,
} from "../middleware/authMiddleware.js";
import {
  deleteReviewController,
  getReviewController,
  inserReviewController,
  updateReviewApproveController,
} from "../controllers/reviewController.js";
import { reviewDataValidation } from "../middleware/validation/reviewValidation.js";

const reviewRouter = express.Router();

reviewRouter.post(
  "/",
  userMiddleWare,
  reviewDataValidation,
  inserReviewController,
);
//return all borrows for admin request only
//check userMiddleware first, then check is admin or not
reviewRouter.get("/admin", userMiddleWare, getReviewController);
// //return all borrows for user request only
reviewRouter.get("/", getReviewController);

reviewRouter.delete("/admin", userMiddleWare, deleteReviewController);
// borrowRouter.patch("/", userMiddleWare, returnBookController);
reviewRouter.patch(
  "/admin",
  userMiddleWare,
  adminAuthMiddleware,
  updateReviewApproveController,
);
export default reviewRouter;
