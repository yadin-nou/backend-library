import express from "express";
import userRouter from "./userRouter/userRouter.js";
const app = express();
const PORT = 8000;
const linkRoute = "/api/v1/users";
app.use(linkRoute, userRouter);
app.listen(
  PORT,
  (
    error, //
  ) => (error ? console.log(error) : console.log("http://localhost:" + PORT)),
);
