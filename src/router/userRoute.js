import { Router } from "express";
import { getAllUsers } from "../controllers/userController.js";
import { checkAuth } from "../middleware/checkAuth.js";

const router = Router();

router.get("/", checkAuth, getAllUsers);

export default router;
