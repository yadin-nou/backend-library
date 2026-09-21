import express from "express";
const adminRouter = express.Router();

adminRouter.post("/addbook", (req, res, next) => {
  try {
    console.log(req.body);
    res.json({
      status: "success",
      message: "Successully Added book!",
      book: req.body,
    });
  } catch (error) {
    console.log(error.message);
  }
});

export default adminRouter;
