import { getAllUsers } from "../repositories/userRepository.js";

export const getAllUsersService = async () => {
  return await getAllUsers();
};
