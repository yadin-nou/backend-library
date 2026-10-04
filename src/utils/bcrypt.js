import bcrypt from "bcryptjs";

const saltRound = 15;

export const hassPassword = (pwd) => {
  return bcrypt.hashSync(pwd, saltRound);
};
export const comparePassword = (plainPass, hashPass) => {
  return bcrypt.compareSync(plainPass, hashPass);
};
