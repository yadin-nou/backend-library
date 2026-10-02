import {
  EMAIL_REQ,
  FNAME_REQ,
  LNAME,
  LNAME_REQ,
  PASSWORD_REQ,
  PHONE_REQ,
} from "./joiConst.js";
import { validateData } from "./joiValidation.js";
import Joi from "joi";
// export const loginDataValidation = (req, res, next) => {
//   const obj = {
//     email:,
//     password,
//   };
// };

export const newUserDataValidation = (req, res, next) => {
  const obj = {
    fName: FNAME_REQ,
    lName: LNAME_REQ,
    email: EMAIL_REQ,
    phone: PHONE_REQ,
    password: PASSWORD_REQ,
  };
  validateData({ req, res, next, obj });
};
