import {
  addBook,
  deleteBooks,
  getAllBooks,
  updateBooks,
} from "../models/bookModel.js";

export const addBookController = async (req, res, next) => {
  try {
    const result = await addBook(req.body);
    res.json({
      status: "success",
      message: "Successully Added book!",
      book: result,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllBooksController = async (req, res, next) => {
  try {
    //console.log(req.query, "yadin");
    const result = await getAllBooks(req.query);

    res.json({
      status: "success",
      message: "recieved all abook",
      book: result,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteBookController = async (req, res, next) => {
  try {
    //const { _id } = req.userInfo;
    //console.log(req.body);
    const result = await deleteBooks(req.body);
    result
      ? res.json({
          data: result,
          status: "success",
          message: "Delete successfuly",
        })
      : res.json({
          status: "error",
          message: error.message,
        });
  } catch (error) {
    next(error);
  }
};

export const updateBookController = async (req, res, next) => {
  try {
    // console.log(req.body);
    const updateResult = await updateBooks(req.body._id, req.body);
    updateResult
      ? res.json({
          data: updateResult,
          status: "success",
          message: "update successfuly",
        })
      : res.json({
          status: "error",
          message: error.message,
        });
  } catch (error) {
    next(error);
  }
};
