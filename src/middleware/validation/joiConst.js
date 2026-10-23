import Joi from "joi";

export const FNAME = Joi.string().min(5);
export const FNAME_REQ = FNAME.required();

export const LNAME = Joi.string().min(3);
export const LNAME_REQ = LNAME.required();

export const EMAIL = Joi.string().email({ minDomainSegments: 2 });
export const EMAIL_REQ = EMAIL.required();

export const PASSWORD = Joi.string();
export const PASSWORD_REQ = PASSWORD.required();

export const PHONE = Joi.number();
export const PHONE_REQ = PHONE.required();

export const SESSION = Joi.string().min(10).max(30);
export const SESSION_REQ = SESSION.required();

export const TOKEN = Joi.string().min(10).max(15);
export const TOKEN_REQ = TOKEN.required();

export const OTP = Joi.number().min(10000).max(999999);
export const OTP_REQ = OTP.required();

export const SHORT_STR = Joi.string().min(1).max(100);
export const SHORT_STR_REQ = SHORT_STR.required();

export const LONG_STR = Joi.string().min(1).max(5000);
export const LONG_STR_REQ = LONG_STR.required();

export const RATING = Joi.number().integer().min(1).max(5);
