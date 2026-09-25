import { responseClient } from "../middleware/responseClient.js";
import { createNewSession } from "../models/sessionModel.js";
import { createNewUser } from "../models/userModel.js";
import { hassPassword } from "../utils/bcrypt.js";
import { v4 as uuidv4 } from "uuid";

export const inserNewUser = async (req, res, next) => {
  try {
    // to do signup process
    // console.log(req.body);
    const { password } = req.body;
    // encrypt the password
    req.body.password = hassPassword(password);
    // receieve the user data
    const user = await createNewUser(req.body);
    if (user?._id) {
      const session = await createNewSession({
        token: uuidv4(),
        association: user.email,
      });
      console.log(session);
      if (session?._id) {
        const url =
          process.env.URL_FRONTEND +
          "?sessionId=" +
          session._id +
          "&t=" +
          session.token;
        console.log(url);
      }

      const message = "successfull added user";
      return responseClient({ req, res, message });
    }
    const message = "Unable to create user!";
    const statusCode = 400;
    responseClient({ req, res, message, statusCode });

    // create an uqique user activation link and send to their email
  } catch (error) {
    if (error.message.includes("E11000 duplicate key error collection")) {
      // add message to overwrite original message
      error.message = "The email already exist, try another email";
      error.statusCode = 400;
    }
    next(error);
  }
};
