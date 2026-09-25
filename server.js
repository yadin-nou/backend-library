import express from "express";
import userRouter from "./routers/userRouter.js";
import dbConfig from "./dbConnection/dbConfig.js";
import adminRouter from "./routers/adminRouter.js";
import cors from "cors";
import morgan from "morgan";
const app = express();
const PORT = process.env.PORT || 8000;
const userRouteLink = "/api/v1/users";
const adminRouteLink = "/api/v1/admin";

//database conneciton

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use(userRouteLink, userRouter);
app.use(adminRouteLink, adminRouter);

dbConfig()
  .then(() => {
    app.listen(PORT, (error) =>
      error
        ? console.log(error)
        : console.log("server is running at http://localhost:" + PORT),
    );
  })
  .catch((error) => console.log(error));
