import express from "express";
import {
  addBookController,
  deleteBookController,
  getAllBooksController,
  updateBookController,
} from "../controllers/bookController.js";

const bookRouter = express.Router();
import {
  adminAuthMiddleware,
  userMiddleWare,
} from "../middleware/authMiddleware.js";

//multer setup
import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      uniqueSuffix +
        "-" +
        file.originalname +
        "." +
        file.mimetype.split("/")[1],
    );
  },
});

//filter to allow images only
import path from "path";
const fileFilter = (req, file, cb) => {
  const allowedFileTypes = /jpeg|jpg|png|jif|webp/;
  const extName = path.extname(file.originalname).toLowerCase();
  const isAllowedExt = allowedFileTypes.test(extName);
  const mimetype = allowedFileTypes.test(file.mimetype);
  if (isAllowedExt && mimetype) {
    cb(null, true);
  } else {
    cb(new Error("Only jpeg|jpg|png|jif|webp are allowed"), false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter,
  limits: { fileSize: 2 * 1024 * 1024 }, //2 MB size
});
//const upload = multer({ dest: "uploads/" });
//end multer setup

bookRouter.post(
  "/addbook",
  userMiddleWare,
  adminAuthMiddleware,
  // upload.single("image"), //one single file only
  upload.array("image", 2),
  addBookController,
);

bookRouter.get("/book", getAllBooksController);
bookRouter.delete("/", deleteBookController);
bookRouter.patch("/", updateBookController);
export default bookRouter;
