import { getUserById } from "../repositories/userRepository.js";
import { handleHttpError } from "../utils/handleHttpError.js";
import { verifyToken } from "../utils/handleToken.js";

export const checkAuth = async (req, res, next) => {
  const access_token = req.cookies?.access_token;
  try {
    if (!access_token)
      return handleHttpError(res, "ERROR_NOT_TOKEN_PROVIDED", 401);

    // Si el token existe, se válida el mismo
    const tokenPayload = await verifyToken(access_token);
    if (!tokenPayload) return handleHttpError(res, "ERROR_INVALID_TOKEN", 401);

    //Se verifica si existe el usuario con el id del token
    const user = await getUserById(tokenPayload.id);
    if (!user) return handleHttpError(res, "ERROR_USER_NOT_FOUND", 404);

    req.user = {
      id: tokenPayload.id,
      username: tokenPayload.username,
    };
    next();
  } catch (error) {
    console.log("Error al válidar Token:", error);
    handleHttpError(res, "ERROR_CHECK_AUTH", 500);
  }
};
