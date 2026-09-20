import mongoose from "mongoose";
const monGO_URL = process.env.MONGO_URL;

const dbConfig = async () => {
  try {
    const conn = await mongoose.connect(monGO_URL);
    conn && console.log("DB connected");
  } catch (error) {
    console.error("Error db conneciton");
  }
};

export default dbConfig;
