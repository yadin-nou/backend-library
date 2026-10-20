import borrowSchema from "./borrowHistorySchema.js";

//insert new user

export const createBorrow = (borrow) => {
  return borrowSchema.insertMany(borrow);
};

//use filter to get borrows for specific user
// if @filter is underfinened, it will return entire records
export const getBorrows = (filter) => {
  return borrowSchema.find(filter);
};
