import { createNewUser } from "../models/userModel.js";
import { hassPassword } from "../utils/bcrypt.js";

export const inserNewUser = async (req, res, next) => {
  try {
    // to do signup process
    console.log(req.body);
    const { password } = req.body;
    // encrypt the password
    req.body.password = hassPassword(password);
    // receieve the user data
    const user = await createNewUser(req.body);
    if (user?._id) {
      res.json({
        status: "success",
        message: "Register Successfully",
        user,
      });
      return;
    }
    res.json({
      status: "error",
      message: "Unable to create user!",
      user,
    });
    // create an uqique user activation link and send to their email
  } catch (error) {
    if (error.message.includes("E11000 duplicate key error collection")) {
      // add message to overwrite original message
      error.message = "The email already exist, try another email";
      error.statusCode = 200;
    }
    next(error);
  }
};
