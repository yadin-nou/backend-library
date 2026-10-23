import { responseClient } from "../middleware/responseClient.js";
import { updateBooks, updateManyBooks } from "../models/bookModel.js";
import {
  createBorrow,
  getBorrows,
  updateBorrow,
} from "../models/borrowHistoryModel.js";
import {
  sendUserEmailNotificationBorrowService,
  sendUserEmailNotificationReturnService,
} from "../services/emailService.js";

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

export const returnBookController = async (req, res, next) => {
  try {
    const { _id, email, fName } = req.userInfo;
    const filters = {
      userId: _id,
      _id: req.body._id,
    };
    const update = {
      isReturned: true,
      returnedDate: Date.now(),
    };
    // console.log(filters, update);
    const updated_borrow = await updateBorrow(filters, update);

    if (updated_borrow?._id) {
      const update_book = await updateBooks(updated_borrow.bookId, {
        availability: true,
        expectAvailabilityDate: Date.now(),
      });
      // console.log(update_book);
      if (update_book) {
        //send email to user
        const obj = [
          {
            thumbnail: update_book.imgURL,
            bookTitle: update_book.title,
            dueDate: updated_borrow.dueDate,
            returnedDate: Date.now(),
          },
        ];
        sendUserEmailNotificationReturnService({
          email,
          name: fName,
          book: obj,
        });
        return responseClient({
          req,
          res,
          message: "Returned book successfully!",
        });
      } else {
        return responseClient({
          req,
          res,
          message: "Unable to return books.",
          statusCode: 400,
        });
      }
    } else {
      return responseClient({
        req,
        res,
        message: "Unable to return books.",
        statusCode: 401,
      });
    }
  } catch (error) {
    next(error);
  }
};
