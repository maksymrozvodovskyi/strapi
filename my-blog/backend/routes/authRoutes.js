import { Router } from "express";
import { register, login, me } from "../controllers/authController.js";

const router = Router();

router.post("/login", login);
router.post("/register", register);
router.get("/me", me);

export default router;
