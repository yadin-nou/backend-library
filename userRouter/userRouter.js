import express from "express";

const userRouter = express.Router();

userRouter.get("/", (req, res, next) => {
  try {
    res.json({
      status: "success",
      message: "Welcome to Library System",
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

export default userRouter;
