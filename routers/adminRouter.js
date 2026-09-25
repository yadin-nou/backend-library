import express from "express";
import { addBook, deleteBooks, getAllBooks } from "../models/bookModel.js";
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
    const result = await getAllBooks(req.query);
    //console.log(req.query);
    res.json({
      status: "success",
      message: "recieved all abook",
      book: result,
    });
  } catch (error) {
    console.log(error.message);
  }
});
adminRouter.delete("/", async (req, res, next) => {
  try {
    //const { _id } = req.userInfo;
    console.log(req.body);
    const result = await deleteBooks(req.body);
    result
      ? res.json({
          data: result,
          status: "success",
          message: "Delete successfuly",
        })
      : res.json({
          status: "error",
          message: error.message,
        });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

export default adminRouter;
