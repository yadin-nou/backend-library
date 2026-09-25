import mongoose from "mongoose";
const monGO_URL = process.env.MONGO_URL;

// const dbConfig = async () => {
//   try {
//     const conn = await mongoose.connect(monGO_URL);
//     conn && console.log("DB connected");
//   } catch (error) {
//     console.error("Error db conneciton");
//   }
// };

const dbConfig = async () => {
  if (!monGO_URL) {
    throw new Error("Provide MONGO_URL connection string");
  }
  //return Premise
  return mongoose.connect(monGO_URL);
};

// const dbConfig = async () => {
//   try {
//     if (!monGO_URL) {
//       throw new Error("Provide MONGO_URL connection string");
//     }
//     const con = await mongoose.connect(monGO_URL);
//     con && console.log("MongoDB is connected");
//   } catch (error) {
//     console.log(error);
//   }
// };
export default dbConfig;
