import sessionSchema from "./sessionSchema.js";

//insert new user

export const createNewSession = (sessionObj) => {
  return sessionSchema(sessionObj).save();
};
