import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fName: {
      type: String,
      required: true,
    },
    lName: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "inactive",
    },
    role: {
      type: String,
      required: true,
      default: "user",
    },
    email: {
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
