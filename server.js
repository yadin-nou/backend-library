import express from "express";
import userRouter from "./userRouter/userRouter.js";
import dbConfig from "./dbConnection/dbConfig.js";
import adminRouter from "./adminRouter/adminRouter.js";
import cors from "cors";
import morgan from "morgan";
const app = express();
const PORT = 8000;
const userRouteLink = "/api/v1/users";
const adminRouteLink = "/api/v1/admin";

//database conneciton

dbConfig();
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use(userRouteLink, userRouter);
app.use(adminRouteLink, adminRouter);
app.listen(
  PORT,
  (
    error, //
  ) => (error ? console.log(error) : console.log("http://localhost:" + PORT)),
);
