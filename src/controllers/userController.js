import { responseClient } from "../middleware/responseClient.js";
import { getAllUsers } from "../models/userModel.js";

export const getAllUsersController = async (req, res, next) => {
  try {
    const user = req.userInfo;
    const result = await getAllUsers();
    const allUsers = result.filter((usr) => {
      usr.password = undefined;
      usr.refreshJWT = undefined;
    });
    return responseClient({
      req,
      res,
      message: "Successfully",
      payload: result,
    });
  } catch (error) {
    next(error);
  }
};

export const getPrfileController = async (req, res, next) => {
  try {
    // *** those code below executing after userMiddleWare finish ***
    const user = req.userInfo; // *** req.userInfo is sent from userMiddleWare after finishing check login ***
    user.password = undefined;
    user.refreshJWT = undefined;
    user.__v = undefined;
    return responseClient({
      req,
      res,
      message: "Successfully",
      payload: user,
    });
  } catch (error) {
    next(error);
  }
};
