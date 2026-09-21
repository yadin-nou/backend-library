import bookSchema from "./bookSchema.js";

export const addBook = (book) => {
  return bookSchema.insertMany(book);
};
