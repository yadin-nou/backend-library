import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    isbn: {
      type: String,
      required: true,
    },
    availability: {
      type: Boolean,
      default: true,
    },
    averageRating: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { timestamps: true },
);

export default mongoose.model("books", bookSchema);
