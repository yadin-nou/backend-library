import express from "express";
import {
  addBookController,
  deleteBookController,
  getAllBooksController,
  updateBookController,
} from "../controllers/bookController.js";

const bookRouter = express.Router();
import {
  adminAuthMiddleware,
  userMiddleWare,
} from "../middleware/authMiddleware.js";
import { upload } from "../utils/multer.js";

bookRouter.post(
  "/addbook",
  userMiddleWare,
  adminAuthMiddleware,
  upload.single("image"), //one single file only
  //upload.array("image", 2),
  addBookController,
);

bookRouter.get("/book", getAllBooksController);
bookRouter.delete("/", deleteBookController);
bookRouter.patch("/", updateBookController);
export default bookRouter;
