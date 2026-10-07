import sessionSchema from "./sessionSchema.js";

//insert new user

export const createNewSession = (sessionObj) => {
  return sessionSchema(sessionObj).save();
};
export const deleteSession = (filter) => {
  return sessionSchema.findOneAndDelete(filter);
};
export const getSession = (filter) => {
  return sessionSchema.findOne(filter);
};
