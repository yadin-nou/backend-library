import { responseClient } from "../middleware/responseClient.js";
import { createNewSession } from "../models/sessionModel.js";
import { createNewUser, getUserByEmail } from "../models/userModel.js";
import { userActivationUrlEmail } from "../services/emailService.js";
import { comparePassword, hassPassword } from "../utils/bcrypt.js";
import { v4 as uuidv4 } from "uuid";

export const inserNewUser = async (req, res, next) => {
  const front_url = process.env.URL_FRONTEND;
  try {
    // to do signup process
    // console.log(req.body);
    const { password } = req.body;
    // encrypt the password
    req.body.password = hassPassword(password);
    // receieve the user data
    const user = await createNewUser(req.body);
    if (user?._id) {
      let session = await createNewSession({
        token: uuidv4(),
        association: user.email,
      });
      //console.log(session);

      if (session?._id) {
        const url =
          front_url + "?sessionId=" + session._id + "&t=" + session.token;
        const emailId = await userActivationUrlEmail({
          email: user.email,
          url: url,
        });
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
      error.message = "The email is exist, try another email";
      error.statusCode = 400;
    }
    //console.log(error, "bean");

    next(error);
  }
};

export const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    //get user by email
    const user = await getUserByEmail(email);
    if (user?._id) {
      console.log(user);
    }
    //compare password
    const isPassMatch = comparePassword(password, user.password);
    if (isPassMatch) {
      console.log("Login successfully!");
      //create jwts
      const jwts = {};
      //reponse jwts
      responseClient({
        req,
        res,
        message: "Login Successfully!",
        payload: jwts,
      });
      return;
    }

    const message = "Invalid Login details!";
    const statusCode = 401;
    responseClient({ req, res, message, statusCode });
  } catch (error) {
    next(error);
  }
};
