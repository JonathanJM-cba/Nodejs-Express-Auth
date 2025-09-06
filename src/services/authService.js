/**
 * Archivo que representa el servicio de autenticación
 */

import { getUserByUsername, saveUser } from "../repositories/userRepository.js";

export const getUser = async (username) => {
  return await getUserByUsername(username);
};

export const createUser = async (user) => {
  return await saveUser(user);
};
