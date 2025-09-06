/**
 * Archivo que representa el modelo de usuario
 */

import dbLocal from "db-local";
const { Schema } = new dbLocal({ path: "./src/database" });

export const Users = Schema("users", {
  id: {
    type: Number,
    primary: true,
    autoIncrement: true,
  },
  username: {
    type: String,
    unique: true,
    required: true,
    length: { min: 5, max: 15 },
  },
  password: {
    type: String,
    required: true,
    length: { min: 8, max: 100 },
  },
});
