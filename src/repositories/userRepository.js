/**
 * Archivo repositorio de usuarios
 */

import { Users } from "../models/userModel.js";

export const getUserByUsername = async (username) => {
  return await Users.findOne({ username });
};

export const saveUser = async (user) => {
  const newUser = await Users.create(user).save();
  return newUser;
};

export const getAllUsers = async () => {
  return await Users.find();
};
