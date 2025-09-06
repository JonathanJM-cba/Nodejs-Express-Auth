/**
 * Función para manejar errores HTTP
 * @param {Response} res - Objeto de respuesta de Express
 * @param {String} message - Mensaje de error
 * @param {Number} code - Código de estado HTTP
 * @returns {JSON} - JSON con el error
 */
export const handleHttpError = (
  res,
  message = "Algo salió mal",
  code = 400
) => {
  return res.status(code).json({ error: message });
};
