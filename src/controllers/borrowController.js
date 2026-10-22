import { responseClient } from "../middleware/responseClient.js";
import { updateBooks, updateManyBooks } from "../models/bookModel.js";
import { createBorrow, getBorrows } from "../models/borrowHistoryModel.js";
import { sendUserEmailNotificationBorrowService } from "../services/emailService.js";

export const inserNewBorrow = async (req, res, next) => {
  try {
    const { _id, fName, email } = req.userInfo;
    let today = new Date();
    const dueDate = today.setDate(today.getDate() + 15);
    const obj = req.body.map((book) => ({
      userId: _id,
      bookId: book.bookId,
      bookTitle: book.bookTitle,
      thumbnail: book.thumbnail,
      dueDate,
    }));
    const bookId = obj.map((book) => book.bookId);
    //console.log(bookId, "bookID");
    const borrow = await createBorrow(obj);
    //  console.log(borrow, "Borrow");
    if (borrow) {
      //update book avilability:false
      const resBook = await updateManyBooks(bookId, {
        availability: false,
        expectAvailabilityDate: dueDate,
      });
      //   console.log(resBook, " after update");
      if (resBook.matchedCount === bookId.length) {
        sendUserEmailNotificationBorrowService({
          name: fName,
          email,
          book: obj,
        });
        return responseClient({ req, res, message: "Borrowed successfully!" });
      } else {
        return responseClient({
          req,
          res,
          message: "Unable to borrow books,email.",
          statusCode: 401,
        });
      }
    } else {
      return responseClient({
        req,
        res,
        message: "Unable to borrow books,borrow.",
        statusCode: 401,
      });
    }
  } catch (error) {
    next(error);
  }
};

export const getAllBorrowsController = async (req, res, next) => {
  try {
    const { _id } = req.userInfo;
    const path = req.path;
    const isAdmin = path === "/admin";

    //console.log(path);
    const borrows = isAdmin
      ? await getBorrows()
      : await getBorrows({ userId: _id });
    //  console.log(borrow, "Borrow");
    if (borrows) {
      responseClient({
        req,
        res,
        message: "Here is the borrow lists",
        payload: borrows,
      });
    } else {
      responseClient({
        req,
        res,
        message: "Borrow list errors!",
        statusCode: 401,
      });
    }
  } catch (error) {
    next(error);
  }
};
