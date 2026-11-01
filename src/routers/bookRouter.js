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
const upload = multer({ storage: storage });
//const upload = multer({ dest: "uploads/" });
//end multer setup

bookRouter.post(
  "/addbook",
  userMiddleWare,
  adminAuthMiddleware,
  upload.single("image"),
  addBookController,
);

bookRouter.get("/book", getAllBooksController);
bookRouter.delete("/", deleteBookController);
bookRouter.patch("/", updateBookController);
export default bookRouter;
