import { unlink } from "fs";
import { resolve } from "path";

export const deleteFile = (filePath) => {
  try {
    unlink(resolve(filePath), () => {
      console.log(filePath, "has been deleted");
    });
  } catch (error) {
    console.log(error);
  }
};
export const deleteManyFiles = (pathArray) => {
  console.log(pathArray);
  pathArray.map((f) => deleteFile(f));
  return;
};
//check single file or muiltiple files when fail to add book.
export const checkDeleteFiles = (req) => {
  //console.log(req, "file");
  if (req.file) {
    deleteFile(req.file.path);
    return;
  }
  if (req.files) {
    req.files.map((f) => deleteFile(f.path));
    return;
  }
};
