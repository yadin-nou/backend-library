import {
  addBook,
  deleteBooks,
  getAllBooks,
  updateBooks,
} from "../models/bookModel.js";
import {
  checkDeleteFiles,
  deleteFile,
  deleteManyFiles,
} from "../utils/fileUtils.js";

export const addBookController = async (req, res, next) => {
  try {
    //console.log(req.file);

    // console.log(req.files);
    const { path } = req.file;
    req.body.imgURL = path;
    req.body.imageList = path;
    //console.log(req.body);
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

    if (result?._id) {
      //console.log(result);
      const delFile = deleteManyFiles(result?.imageList);
      //console.log(result);
      res.json({
        data: result,
        status: "success",
        message: "Delete successfuly",
      });
    } else {
      res.json({
        status: "error",
        message: error.message,
      });
    }
  } catch (error) {
    next(error);
  }
};

export const updateBookController = async (req, res, next) => {
  try {
    // console.log("body: ", req.body);

    // console.log("files: ", req.files);
    if (req.files.length > 0) {
      // if imageList already exist
      if (req.body.imageList !== "") {
        console.log("imageList is exist and have files too");
        req.body.imageList = [
          ...req.body.imageList.split(","),
          ...req.files.map((f) => f.path),
        ];
      } else {
        //if imageList empty but files have at least one.
        console.log("imageList empty but files have at least one");
        req.body.imageList = [...req.files.map((f) => f.path)];
        req.body.imgURL = req.body.imageList[0];
      }
    } else {
      if (req.body.imageList !== "") {
        req.body.imageList = req.body.imageList.split(",");
        //console.log(imgs, "------");
        //req.body.imageList=imgs
      } else {
        //console.log("empty:", req.body.imageList);
        req.body.imageList = [];
      }
    }

    //req.body.imageList = [req.body.imgURL, ...req.files.map((f) => f.path)];
    req.body.expectAvailabilityDate =
      req.body.expectAvailabilityDate === "null"
        ? null
        : req.body.expectAvailabilityDate;
    req.body.availability =
      req.body.availability === "true" ? true : req.body.availability;
    //return;
    // req.body.imgURL = path;
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

export const updateBookImgController = async (req, res, next) => {
  try {
    //delete image by path
    //delete image from imageList
    req.body.imageList = req.body.imageList.filter(
      (img) => img !== req.body.path,
    );
    const updateResult = await updateBooks(req.body._id, req.body);
    if (updateResult) {
      deleteFile(req.body.path);
      res.json({
        data: updateResult,
        status: "success",
        message: "Image deleted successfuly",
      });
    } else {
      res.json({
        status: "error",
        message: error.message,
      });
    }
  } catch (error) {
    next(error);
  }
};
