import Joi from "joi";
import { responseClient } from "./responseClient.js";
export const validateData = (req, res, next) => {
  //create schema or rules
  const schema = Joi.object({
    fName: Joi.string().min(5).required(),
    lName: Joi.string().min(3).required(),
    email: Joi.string().email({ minDomainSegments: 2 }).required(),
    phone: Joi.number(),
    password: Joi.string().required(),
  });
  //pass your data, req.body, to the schema,
  const value = schema.validate(req.body);
  if (value.error) {
    return responseClient({ req, res, message: value.error, statusCode: 400 });
  }
  next();
  // if pass go next() or response error
};
