import express from "express";
import { verifyAccessJWT } from "../utils/jwt.js";
import { responseClient } from "../middleware/responseClient.js";
import { getSession } from "../models/sessionModel.js";
import { getUserByEmail } from "../models/userModel.js";

const userRouter = express.Router();

userRouter.get("/profile", async (req, res, next) => {
  // get accessJWT
  const { authorization } = req.headers;
  let message = "Unauthorized";
  if (authorization) {
    // check if valid
    const decode = verifyAccessJWT(authorization);
    if (decode.email) {
      // check if exist in session table
      const dbTokenSession = await getSession({ token: authorization });

      if (dbTokenSession?._id) {
        //get user by email
        const user = await getUserByEmail(decode.email);
        //const user = await getUserByEmail(dbTokenSession.association);
        if (user?._id && user?.status === "active") {
          //return the user
          user.password = undefined;
          return responseClient({
            req,
            res,
            message: "Successfully",
            payload: user,
          });
        }
      }
    }
    message =
      decode.includes("jwt expired") || decode.includes("invalid")
        ? decode
        : "Unauthorized";
  }

  responseClient({
    req,
    res,
    message,
    statusCode: 401,
  });
});

export default userRouter;
