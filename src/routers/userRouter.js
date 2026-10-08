import express from "express";
import { userMiddleWare } from "../middleware/authMiddleware.js";
import { responseClient } from "../middleware/responseClient.js";

const userRouter = express.Router();

userRouter.get("/profile", userMiddleWare, (req, res, next) => {
  // *** those code below executing after userMiddleWare finish ***
  const user = req.userInfo; // *** req.userInfo is sent from userMiddleWare after finishing check login ***
  user.password = undefined;
  user.refreshJWT = undefined;
  user.__v = undefined;
  return responseClient({
    req,
    res,
    message: "Successfully",
    payload: user,
  });
});

export default userRouter;
