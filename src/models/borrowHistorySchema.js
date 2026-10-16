import mongoose from "mongoose";

const borrowHistorySchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.ObjectId,
      required: true,
      ref: "User",
    },
    bookId: {
      type: mongoose.Schema.ObjectId,
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
    dueDate: {
      type: Date,
      required: true,
      default: "user",
    },
    isReturned: {
      type: String,
      required: true,
      unique: true,
      index: 1,
    },
    phone: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    refreshJWT: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("user", userSchema);
