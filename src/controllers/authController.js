/**
 * Archive of authentication controller
 */

import { createUser, getUser } from "../services/authService.js";
import { handleHttpError } from "../utils/handleHttpError.js";
import { hashPassword } from "../utils/handlePassword.js";

export const registerUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    //1. Se verifica que el usuario no exista
    const user = await getUser(username);
    if (user) handleHttpError(res, "ERROR_USER_EXIST", 400);

    //2. Se encripta la contraseña
    const hashedPassword = await hashPassword(password);

    //3. Se crea el usuario
    const newUser = await createUser({ username, password: hashedPassword });
    res.status(201).json({
      message: "Usuario registrado correctamente",
      username: newUser.username,
    });
  } catch (error) {
    console.log("Error al registrar usuario:", error);
    handleHttpError(res, "ERROR_REGISTER_USER", 500);
  }
};
