/**
 * Authentication Router
 */

import { Router } from "express";

const router = Router();

// Ruta para registrar usuarios
router.get("/register", (req, res) => {
  res.send("Registro de usuario");
});

export default router;
