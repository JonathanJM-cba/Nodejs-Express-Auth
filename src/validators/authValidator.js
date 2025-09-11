import { check } from "express-validator";
import { validateResult } from "../utils/handleValidator.js";

export const authValidator = [
  check("username")
    .exists()
    .withMessage("El campo username es obligatorio")
    .notEmpty()
    .withMessage("El campo username no puede estar vacío")

    .isString()
    .withMessage("El campo username debe ser una cadena de texto")
    .isLength({ min: 5, max: 15 })
    .withMessage("El campo username debe tener entre 5 y 15 caracteres"),
  check("password")
    .exists()
    .withMessage("El campo password es obligatorio")
    .notEmpty()
    .withMessage("El campo password no puede estar vacío")

    .isString()
    .withMessage("El campo password debe ser una cadena de texto")
    .isLength({ min: 8, max: 100 })
    .withMessage("El campo password debe tener entre 8 y 100 caracteres"),
  (req, res, next) => {
    return validateResult(req, res, next);
  },
];
