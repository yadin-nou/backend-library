import borrowSchema from "./borrowHistorySchema.js";

//insert new user

export const createBorrow = (borrow) => {
  return borrowSchema.insertMany(borrow);
};

// export const getUserByEmail = (email) => {
//   return userSchema.findOne({ email });
// };
// export const getUserOne = (filter) => {
//   return userSchema.findOne(filter);
// };

// export const updateUser = (filter, update) => {
//   return userSchema.findOneAndUpdate(filter, update, {
//     returnDocument: "after",
//     runValidators: true,
//   });
// };
