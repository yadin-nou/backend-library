import { responseClient } from "../middleware/responseClient.js";
import { createReview } from "../models/reviewModel.js";

export const inserReviewController = async (req, res, next) => {
  try {
    const { _id, fName } = req.userInfo;
    const reviewObj = {
      userId: _id,
      userName: fName,
      ...req.body, // all obj from front end
      // bookId,
      // title,
      // reviewMessage,
      // rating,
      // borrowId,
    };
    const result = await createReview(reviewObj);
    if (result) {
      return responseClient({
        req,
        res,
        message: "Your review has been added.",
      });
    } else {
      return responseClient({
        req,
        res,
        message: "Unable to create review.",
        statusCode: 401,
      });
    }
  } catch (error) {
    next(error);
  }
};
