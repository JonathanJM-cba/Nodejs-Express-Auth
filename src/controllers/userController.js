import { getAllUsersService } from "../services/userService.js";
import { handleHttpError } from "../utils/handleHttpError.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await getAllUsersService();
    res.status(200).json(users);
  } catch (error) {
    console.log("Error al obtener usuarios:", error);
    handleHttpError(res, "ERROR_GET_USERS", 500);
  }
};
