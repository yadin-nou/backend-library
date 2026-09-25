import bcrypt from "bcryptjs";

const saltRound = 15;

export const hassPassword = (pwd) => {
  return bcrypt.hashSync(pwd, saltRound);
};
