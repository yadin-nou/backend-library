import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    imgURL: {
      type: String,
      required: true,
    },
    isbn: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    description: {
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
