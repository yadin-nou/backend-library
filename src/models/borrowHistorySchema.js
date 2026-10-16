import mongoose from "mongoose";

const borrowHistorySchema = new mongoose.Schema(
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
    bookTitle: {
      type: String,
      required: true,
    },
    thumbail: {
      type: String,
      default: "inactive",
    },

    isReturned: {
      type: Boolean,
      default: false,
    },
    dueDate: {
      type: Date,
      required: true,
    },
    returnedDate: {
      type: Date,
      required: null,
    },
    reviewId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "review",
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Borrow", borrowHistorySchema);
