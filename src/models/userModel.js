import userSchema from "./userSchema.js";

//insert new user

export const createNewUser = (userObj) => {
  return userSchema(userObj).save();
};

export const getUserByEmail = (email) => {
  return userSchema.findOne({ email });
};

export const updateUser = (filter, update) => {
  return userSchema.findOneAndUpdate(filter, update, { new: true });
};
