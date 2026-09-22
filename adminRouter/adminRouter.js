import express from "express";
import { addBook, getAllBooks } from "../models/bookModel.js";
const adminRouter = express.Router();

adminRouter.post("/addbook", async (req, res, next) => {
  try {
    const result = await addBook(req.body);
    res.json({
      status: "success",
      message: "Successully Added book!",
      book: result,
    });
  } catch (error) {
    console.log(error.message);
  }
});

adminRouter.get("/book", async (req, res, next) => {
  try {
    const result = await getAllBooks();
    res.json({
      status: "success",
      message: "recieved all abook",
      book: result,
    });
  } catch (error) {
    console.log(error.message);
  }
});

export default adminRouter;
