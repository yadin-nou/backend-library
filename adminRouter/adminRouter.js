import express from "express";
import { addBook } from "../models/bookModel.js";
const adminRouter = express.Router();

adminRouter.post("/addbook", async (req, res, next) => {
  try {
    //console.log(req.body);
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

export default adminRouter;
