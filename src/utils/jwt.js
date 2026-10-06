import jwt from "jsonwebtoken";
import { createNewSession } from "../models/sessionModel.js";
import { updateUser } from "../models/userModel.js";

// //genereate accessJWT short term 15 minutes
export const createAccesJWT = async (email) => {
  //create
  const jwtAccess = process.env.JWT_ACCESS_SECRET;
  const token = jwt.sign({ email }, jwtAccess, { expiresIn: "15m" });
  //store
  const obj = {
    token,
    association: email,
    expire: new Date(Date.now() + 15 * 60 * 1000), //15 minutes
  };
  const newSesssions = await createNewSession(obj);
  return newSesssions?._id ? token : null;
};

// //genereate refreshJWT for 30 days expired
export const createRefreshJWT = async (email) => {
  //create
  const jwtRefresh = process.env.JWT_REFRESH_SECRET;
  const token = jwt.sign({ email }, jwtRefresh, { expiresIn: "30d" }); //30 days expired
  //store
  const user = await updateUser({ email }, { refreshJWT: token });
  return user?._id ? token : null;
};

// //decode access accessJWT and refreshJWT

export const getJWTS = async (email) => {
  return {
    accessJWT: await createAccesJWT(email),
    refreshJWT: await createRefreshJWT(email),
  };
};
