import express from "express";
import { signup, checkAuth, logout } from "../controllers/auth.controller.js";
import { verifyToken } from "../middlewares/verifyToken.js";

const router = express.Router();

router.get("/check-auth", verifyToken, checkAuth);

router.post("/signup", signup);
router.post("/logout", logout);

export default router;
