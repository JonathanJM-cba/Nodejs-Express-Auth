/**
 * Archive of authentication controller
 */

import { createUser, getUser } from "../services/authService.js";
import { handleHttpError } from "../utils/handleHttpError.js";
import { hashPassword, validatePassword } from "../utils/handlePassword.js";
import { generateToken } from "../utils/handleToken.js";

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

export const loginUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    //1. Se verifica que el usuario exista
    const user = await getUser(username);

    if (!user) return handleHttpError(res, "ERROR_USER_NOT_FOUND", 404);

    //2. En caso de existir, se verifica la contraseña
    const isPasswordValid = await validatePassword(password, user.password);

    if (!isPasswordValid)
      return handleHttpError(res, "ERROR_INVALID_PASSWORD", 401);

    //3. Si la contraseña es correcta, se genera access token y refresh token
    const { accessToken, refreshToken } = await generateToken(user);

    //4. Se envía la respuesta al cliente
    res
      .status(200)
      .cookie("access_token", accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 15 * 60 * 1000, // 15 minutos
      })
      .cookie("refresh_token", refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 24 * 60 * 60 * 1000, // 1 día
      })
      .json({
        message: "Login exitoso",
        accessToken,
        refreshToken,
      });
  } catch (error) {
    console.log("Error al intentar iniciar sesión:", error);
    handleHttpError(res, "ERROR_LOGIN_USER", 500);
  }
};
