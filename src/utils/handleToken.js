import jwt from "jsonwebtoken";
import "dotenv/config";

const SECRET_ACCESS_TOKEN = process.env.SECRET_ACCESS_TOKEN;
const SECRET_REFRESH_TOKEN = process.env.SECRET_REFRESH_TOKEN;

export const generateToken = async (user) => {
  try {
    const accessToken = await jwt.sign(
      {
        id: user._id,
        username: user.username,
      },
      SECRET_ACCESS_TOKEN,
      {
        expiresIn: "15m",
        algorithm: "HS256",
      }
    );

    const refreshToken = await jwt.sign(
      {
        id: user._id,
        username: user.username,
      },
      SECRET_REFRESH_TOKEN,
      {
        expiresIn: "1d",
        algorithm: "HS256",
      }
    );

    return { accessToken, refreshToken };
  } catch (error) {
    console.log("Error generating token:", error);
  }
};

/**
 * Función para verificar un token
 * @param {string} token - Pasar el token a verificar
 * @returns - Retorna el payload del token si es válido, de lo contrario retorna undefined
 */
export const verifyToken = async (token) => {
  try {
    return await jwt.verify(token, SECRET_ACCESS_TOKEN);
  } catch (error) {
    console.log("Error al verificar token:", error);
  }
};
