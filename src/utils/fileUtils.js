import { unlink } from "fs";
import { resolve } from "path";

const deleteFile = (filePath) => {
  try {
    unlink(resolve(filePath), () => {
      console.log(filePath, "has been deleted");
    });
  } catch (error) {
    console.log(error);
  }
};
//check single file or muiltiple files when fail to add book.
const checkDeleteFiles = (req) => {
  if (req.file) {
    deleteFile(req.file.path);
    return;
  }
  if (req.files) {
    req.files.map((f) => deleteFile(f.path));
  }
};
