import { responseClient } from "../middleware/responseClient.js";
import { createBorrow } from "../models/borrowHistoryModel.js";

export const inserNewBorrow = async (req, res, next) => {
  try {
    const { _id } = req.userInfo;
    let today = new Date();
    const dueDate = today.setDate(today.getDate() + 15);
    const obj = req.body.map((book) => ({
      userId: _id,
      bookId: book.bookId,
      bookTitle: book.bookTitle,
      thumbnail: book.thumbnail,
      dueDate,
    }));
    const borrow = await createBorrow(obj);

    if (borrow[0]?._id) {
      return responseClient({ req, res, message: "Borrowed successfully!" });
    } else {
      return responseClient({
        req,
        res,
        message: "Unable to borrow books.",
        statusCode: 401,
      });
    }
  } catch (error) {
    next(error);
  }
};
