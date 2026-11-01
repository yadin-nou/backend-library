import express from "express";
import {
  addBookController,
  deleteBookController,
  getAllBooksController,
  updateBookController,
} from "../controllers/bookController.js";
const bookRouter = express.Router();

bookRouter.post("/addbook", addBookController);

bookRouter.get("/book", getAllBooksController);
bookRouter.delete("/", deleteBookController);
bookRouter.patch("/", updateBookController);
export default bookRouter;
