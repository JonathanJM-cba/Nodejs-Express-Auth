/**
 * Authentication Router
 */

import { Router } from "express";
import { loginUser, registerUser } from "../controllers/authController.js";
import { authValidator } from "../validators/authValidator.js";

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
router.post("/register", authValidator, registerUser);

/**
 * @router POST /login
 * @desc Iniciar sesión de usuario
 * @access Público
 * @response {Object} 200 - Login exitoso con accessToken y refreshToken
 * @response {Object} 404 - Error: Usuario no encontrado
 * @response {Object} 401 - Error: Contraseña inválida
 * @response {Object} 500 - Error del servidor
 */
router.post("/login", authValidator, loginUser);

export default router;
