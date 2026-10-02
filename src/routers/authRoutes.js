import express from "express";
import { inserNewUser, loginUser } from "../controllers/authController.js";
import { validateData } from "../middleware/joiValidation.js";

const authRouter = express.Router();

//User signup
//when we insert middleware in between insertNewUser,
//mean we want to validate date first
authRouter.post("/register", validateData, inserNewUser);
// authRouter.post("/activate-user", userActivationDataValidateion,activateUser);
authRouter.post("/register", inserNewUser);
authRouter.post("/login", loginUser);
export default authRouter;
