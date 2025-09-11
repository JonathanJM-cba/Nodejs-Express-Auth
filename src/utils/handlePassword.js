import bcrypt, { hash } from "bcryptjs";

const saltRounds = 10;

export const hashPassword = async (password) => {
  try {
    return await bcrypt.hash(password, saltRounds);
  } catch (error) {
    console.log("Error al hashear la contraseña:", error);
  }
};

/**
 * Función para validar la contraseña
 * @param {string} password - Pasar la contraseña del usuario en texto plano
 * @param {string} hashedPassword - Pasar la contraseña hasheada que se encuentra en la base de datos
 * @returns {boolean} - Retorna true si las contraseñas coinciden, de lo contrario retorna false
 */
export const validatePassword = async (password, hashedPassword) => {
  try {
    return await bcrypt.compare(password, hashedPassword);
  } catch (error) {
    console.log("Error al validar las constraseñas: ", error);
  }
};
