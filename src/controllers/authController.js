import { createNewUser } from "../models/userModel.js";
import { hassPassword } from "../utils/bcrypt.js";

export const inserNewUser = async (req, res, error) => {
  try {
    // to do signup process
    console.log(req.body);
    const { password } = req.body;
    req.body.password = hassPassword(password);
    // receieve the user data
    const user = await createNewUser(req.body);
    // encrypt the password
    // insert user into db

    // create an uqique user activation link and send to their email
    res.json({
      status: "success",
      message: "Register Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
  }
};
