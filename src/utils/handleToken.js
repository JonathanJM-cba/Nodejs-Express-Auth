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
