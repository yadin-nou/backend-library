import { responseClient } from "../middleware/responseClient.js";
import { createNewSession, deleteSession } from "../models/sessionModel.js";
import {
  createNewUser,
  getUserByEmail,
  updateUser,
} from "../models/userModel.js";
import {
  userAccountActivatedNotificationEmail,
  userActivationUrlEmail,
} from "../services/emailService.js";
import { comparePassword, hassPassword } from "../utils/bcrypt.js";
import { v4 as uuidv4 } from "uuid";
import { getJWTS } from "../utils/jwt.js";

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
          front_url +
          "/activate-user?sessionId=" +
          session._id +
          "&t=" +
          session.token;
        await userActivationUrlEmail({
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
      //console.log(user);
      //}
      //compare password
      const isPassMatch = comparePassword(password, user.password);
      if (isPassMatch) {
        if (user?.status === "inactive") {
          const statusCode = 401;
          responseClient({
            req,
            res,
            message: "Account is In-Active, please activate account by Reset.",
            payload: {},
            statusCode,
          });
          return;
        } else {
          //create jwts
          const jwts = await getJWTS(email);
          // user.password = undefined;
          // user.refreshJWT = undefined;
          // jwts.users = user;
          //reponse jwts
          responseClient({
            req,
            res,
            message: "Login Successfully!",
            payload: jwts,
          });
          return;
        }
      }
    }
    const message = "Invalid email or password !";
    const statusCode = 401;
    responseClient({ req, res, message, statusCode });
  } catch (error) {
    next(error);
  }
};

export const activateUser = async (req, res, next) => {
  const front_url = process.env.URL_FRONTEND;
  try {
    const { sessionId, t } = req.body;
    const result = await deleteSession({
      _id: sessionId,
      token: t,
    });
    // after delete successfull server response back with data have been deleted
    // so we can catch up association field which contain email.

    if (result?._id) {
      //update user collection via associatin email
      const user = await updateUser(
        { email: result.association },
        { status: "active" },
      );

      if (user?._id) {
        // console.log(user.email, user.fName);
        const activateID = await userAccountActivatedNotificationEmail({
          email: user.email,
          name: user.fName,
          url: front_url + "/login",
        });
      } else {
        console.log("No user matched for email:", result.association);
      }
      const message = "Your email has been activated!";
      responseClient({ req, res, message });
    } else {
      const message = "Your session has expired";
      const statusCode = 400;
      responseClient({ req, res, message, statusCode });
    }
  } catch (error) {
    next(error);
  }
};
