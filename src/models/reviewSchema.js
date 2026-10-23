import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    bookId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Book",
    },
    borrowId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Borrows",
    },
    title: {
      type: String,
      required: true,
    },
    reviewMessage: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      default: false,
    },
    isApproved: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Reviews", reviewSchema);
