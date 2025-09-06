/**
 * Authentication Router
 */

import { Router } from "express";
import { registerUser } from "../controllers/authController.js";

const router = Router();

// Ruta para registrar usuarios
/**
 * @router POST /register
 * @desc Registrar un nuevo usuario
 * @access Público
 * @response {Object} 201 - Usuario registrado correctamente
 * @response {Object} 400 - Error: El usuario ya existe
 * @response {Object} 500 - Error del servidor
 */
router.post("/register", registerUser);

export default router;
