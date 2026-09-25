import bookSchema from "./bookSchema.js";

export const addBook = (book) => {
  return bookSchema.insertMany(book);
};
//optionally filter by id (or other fields) while still supporting "get all"
export const getAllBooks = (filter = {}) => {
  return bookSchema.find(filter);
};
export const deleteBooks = (_ids) => {
  return bookSchema.deleteMany({ _id: { $in: _ids } });
};
