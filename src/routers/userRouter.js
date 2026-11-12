import express from "express";
import {
  adminAuthMiddleware,
  userMiddleWare,
} from "../middleware/authMiddleware.js";
import {
  getAllUsersController,
  getPrfileController,
} from "../controllers/userController.js";
import { responseClient } from "../middleware/responseClient.js";

const userRouter = express.Router();

userRouter.get("/profile", userMiddleWare, getPrfileController);

// userRouter.get("/profile", userMiddleWare, (req, res, next) => {
//   // *** those code below executing after userMiddleWare finish ***
//   const user = req.userInfo; // *** req.userInfo is sent from userMiddleWare after finishing check login ***
//   if (!user) {
//     return responseClient({
//       req,
//       res,
//       message: "User Not Found",
//       statusCode: 401,
//     });
//   }
//   user.password = undefined;
//   user.refreshJWT = undefined;
//   user.__v = undefined;
//   return responseClient({
//     req,
//     res,
//     message: "Successfully",
//     payload: user,
//   });
// });

userRouter.get(
  "/all",
  userMiddleWare,
  adminAuthMiddleware,
  getAllUsersController,
);
export default userRouter;
