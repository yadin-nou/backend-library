import express from "express";
import { userMiddleWare } from "../middleware/authMiddleware.js";
import { inserReviewController } from "../controllers/reviewController.js";
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
// borrowRouter.get(
//   "/admin",
//   userMiddleWare,
//   adminAuthMiddleware,
//   getAllBorrowsController,
// );
// //return all borrows for user request only
// borrowRouter.get("/user", userMiddleWare, getAllBorrowsController);
// borrowRouter.patch("/", userMiddleWare, returnBookController);

export default reviewRouter;
