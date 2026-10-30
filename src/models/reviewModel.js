import reviewSchema from "./reviewSchema.js";
import userSchema from "./userSchema.js";
import bookSchema from "./bookSchema.js";

export const createReview = (revObj) => {
  return reviewSchema(revObj).save();
};

export const updateReview = (filter, obj) => {
  return reviewSchema.findOneAndUpdate(filter, obj);
};
export const deleteReview = (filter) => {
  return reviewSchema.findOneAndDelete(filter);
};

//use filter to get borrows for specific user
// if @filter is underfinened, it will return entire records
export const getReviews = (filter) => {
  // return reviewSchema.find(filter).sort({ updateAt: -1 }); //sort by the latest review
  //join table book with path bookId foreight key in review table
  return reviewSchema
    .find(filter)
    .populate({
      path: "bookId",
      model: bookSchema,
      select: "title imgURL",
    })
    .populate({
      path: "userId",
      model: userSchema,
      select: "fName",
    })
    .sort({ updatedAt: -1 });
};
