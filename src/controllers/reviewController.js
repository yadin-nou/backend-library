import { responseClient } from "../middleware/responseClient.js";
import { updateBorrow } from "../models/borrowHistoryModel.js";
import {
  createReview,
  deleteReview,
  getReviews,
} from "../models/reviewModel.js";

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
    if (result?._id) {
      //update borrow table with reviewID which is result._id
      const reviewId = result._id;
      const borrowId = reviewObj.borrowId;
      const updateResult = await updateBorrow(
        { _id: borrowId },
        {
          reviewId,
        },
      );
      if (updateResult?._id) {
        return responseClient({
          req,
          res,
          message: "Your review has been added.",
        });
      }
    }

    return responseClient({
      req,
      res,
      message: "Unable to create review.Please contact administrator.",
      statusCode: 401,
    });
  } catch (error) {
    next(error);
  }
};

export const getReviewController = async (req, res, next) => {
  try {
    const filter = {};
    //is admin requesting or public
    if (req?.userInfo?.role !== "admin") {
      //filter only approved review to show to public
      filter.isApproved = true;
    }
    const payload = await getReviews(filter);
    if (payload) {
      return responseClient({
        req,
        res,
        message: "success get all review.",
        payload,
      });
    }
  } catch (error) {
    next(error);
  }
};

export const deleteReviewController = async (req, res, next) => {
  try {
    const { _id } = req.body;
    // console.log(_id);
    const result = await deleteReview({ _id });
    if (result?._id) {
      const borrowId = result.borrowId;
      const updateBow = await updateBorrow(
        { _id: borrowId },
        { reviewId: null },
      );
      if (updateBow?._id) {
        return responseClient({
          req,
          res,
          result,
          message: "Delete review Succesfully.",
        });
      } else {
        responseClient({
          req,
          res,
          result,
          message: "Something went wrong with borrow!",
          statusCode: 401,
        });
      }
    } else {
      responseClient({
        req,
        res,
        result,
        message: "Something went wrong!",
        statusCode: 400,
      });
    }
  } catch (error) {
    next(error);
  }
};
