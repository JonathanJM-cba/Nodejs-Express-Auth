/**
 * Authentication Router
 */

import { Router } from "express";
import { registerUser } from "../controllers/authController.js";

const router = Router();

// Ruta para registrar usuarios
router.post("/register", registerUser);

export default router;
