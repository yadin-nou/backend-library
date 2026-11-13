import { isObjectIdOrHexString } from "mongoose";
import borrowSchema from "./borrowHistorySchema.js";
import userSchema from "./userSchema.js";

//insert new user

export const createBorrow = (borrow) => {
  return borrowSchema.insertMany(borrow);
};

export const updateBorrow = (filter, obj) => {
  return borrowSchema.findOneAndUpdate(filter, obj);
};

//use filter to get borrows for specific user
// if @filter is underfinened, it will return entire records
export const getBorrows = (filter) => {
  return borrowSchema
    .find(filter)
    .populate({
      path: "userId",
      model: userSchema,
      select: "fName lName",
    })
    .sort({ updatedAt: -1 });
};
