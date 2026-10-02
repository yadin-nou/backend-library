import Joi from "joi";
import { responseClient } from "../responseClient.js";
export const validateData = ({ req, res, next, obj }) => {
  //create schema or rules
  const schema = Joi.object(obj);
  //pass your data, req.body, to the schema,
  const value = schema.validate(req.body);
  if (value.error) {
    return responseClient({ req, res, message: value.error, statusCode: 400 });
  }
  next();
  // if pass go next() or response error
};
