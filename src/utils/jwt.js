import jwt from "jsonwebtoken";

//genereate accessJWT

export const createAccesJWT = (payload) => {
  //create
  const jwtSecret = process.env.JWT_SECRET;
  const token = jwt.sign(payload, jwtSecret, { expiresIn: "15m" });
  //store
  const obj = {
    token,
    expire: new Date(Date.now() + 15 * 60 * 1000), //15 minutes
  };
};

//decode access JWT
