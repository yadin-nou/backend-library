import express from "express";
import userRouter from "./userRouter/userRouter.js";
import dbConfig from "./dbConnection/dbConfig.js";
const app = express();
const PORT = 8000;
const linkRoute = "/api/v1/users";

//database conneciton

dbConfig();

app.use(linkRoute, userRouter);
app.listen(
  PORT,
  (
    error, //
  ) => (error ? console.log(error) : console.log("http://localhost:" + PORT)),
);
