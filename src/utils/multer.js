//multer setup
import multer from "multer";
import path from "path";
import fs from "fs";
const __dirname = path.resolve();
const filePath = path.join(__dirname, "public/images");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    //check if director exist, if not create one
    //fs filesystem
    !fs.existsSync(filePath) && fs.mkdirSync(filePath, { recursive: true });
    cb(null, filePath);
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

export const upload = multer({
  storage: storage,
  fileFilter,
  limits: { fileSize: 2 * 1024 * 1024 }, //2 MB size
});
//const upload = multer({ dest: "uploads/" });
//end multer setup
