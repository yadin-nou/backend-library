import express from "express";

const authRouter = express.Router();

//User signup

authRouter.post("/register", (req, res, error) => {
  try {
    res.json({
      status: "success",
      message: "Register Successfully",
    });
  } catch (error) {
    console.log(error);
  }
});

export default authRouter;
