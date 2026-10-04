import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema(
  {
    token: {
      type: String,
      required: true,
    },
    association: {
      type: String,
    },
    expire: {
      type: Date,
      required: true,
      default: new Date(Date.now() + 15 * 60 * 1000), //15 minutes expire
      expires: 0, //will delete if time up.
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("session", sessionSchema);
