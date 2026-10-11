import express from "express";
import {
  activateUser,
  authGenerateOTP,
  authResetPassword,
  inserNewUser,
  loginUser,
} from "../controllers/authController.js";
import {
  loginDataValidation,
  newUserDataValidation,
  resetPasswordOTPValidation,
} from "../middleware/validation/authDataValidation.js";
import { renewRefreshJWTMiddleWare } from "../middleware/authMiddleware.js";

const authRouter = express.Router();

//User signup
//when we insert middleware in between insertNewUser,
//mean we want to validate date first
authRouter.post("/register", newUserDataValidation, inserNewUser);
// authRouter.post("/activate-user", userActivationDataValidateion,activateUser);
//authRouter.post("/register", inserNewUser);
authRouter.post("/login", loginDataValidation, loginUser);
authRouter.post("/activate-user", activateUser);
authRouter.get("/renew-jwt", renewRefreshJWTMiddleWare);
authRouter.post("/otp", authGenerateOTP);
authRouter.post("/reset-pwd", resetPasswordOTPValidation, authResetPassword);

export default authRouter;
