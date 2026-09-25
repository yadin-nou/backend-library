import express from "express";
import userRouter from "./src/routers/userRouter.js";
import dbConfig from "./src/dbConnection/dbConfig.js";
import adminRouter from "./src/routers/adminRouter.js";
import authRouter from "./src/routers/authRoutes.js";
import cors from "cors";
import morgan from "morgan";
import { errorHandler } from "./src/middleware/errorMiddleware.js";
const app = express();
const PORT = process.env.PORT || 8000;
const userRouteLink = "/api/v1/users";
const adminRouteLink = "/api/v1/admin";
const authRouterLink = "/api/v1/auth";
//database conneciton

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use(userRouteLink, userRouter);
app.use(adminRouteLink, adminRouter);

//api endpoints
app.use(authRouterLink, authRouter);
//use this error to catch as global
app.use(errorHandler);
dbConfig()
  .then(() => {
    app.listen(PORT, (error) =>
      error
        ? console.log(error)
        : console.log("server is running at http://localhost:" + PORT),
    );
  })
  .catch((error) => console.log(error));
