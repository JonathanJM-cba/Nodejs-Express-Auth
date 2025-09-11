import { validationResult } from "express-validator";

/**
 * Función para manejar los errores de validación en las rutas de Express.
 * Si hay errores, responde con un estado 400 y los detalles de los errores.
 * Si no hay errores, llama a next() para continuar con el siguiente middleware o controlador.
 * @param {Request} req - Objeto de solicitud de Express
 * @param {Response} res - Objeto de respuesta de Express
 * @param {Next} next - Función para pasar al siguiente middleware
 * @returns - void
 */
export const validateResult = (req, res, next) => {
  try {
    validationResult(req).throw();
    return next();
  } catch (error) {
    res.status(400).json({ errors: error.array() });
  }
};
