import express from "express";
import { inserNewUser } from "../controllers/authController.js";

const authRouter = express.Router();

//User signup

authRouter.post("/register", inserNewUser);

export default authRouter;
