import bcrypt from "bcryptjs";

const saltRounds = 10;

export const hashPassword = async (password) => {
  try {
    return await bcrypt.hash(password, saltRounds);
  } catch (error) {
    console.log("Error al hashear la contraseña:", error);
  }
};
