import express from "express";
import { inserNewUser, loginUser } from "../controllers/authController.js";
import {
  loginDataValidation,
  newUserDataValidation,
} from "../middleware/validation/authDataValidation.js";

const authRouter = express.Router();

//User signup
//when we insert middleware in between insertNewUser,
//mean we want to validate date first
authRouter.post("/register", newUserDataValidation, inserNewUser);
// authRouter.post("/activate-user", userActivationDataValidateion,activateUser);
//authRouter.post("/register", inserNewUser);
authRouter.post("/login", loginDataValidation, loginUser);
export default authRouter;
