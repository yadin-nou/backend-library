import userSchema from "./userSchema.js";

//insert new user

export const createNewUser = (userObj) => {
  return userSchema(userObj).save();
};
