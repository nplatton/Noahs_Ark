const express = require("express");
const router = express.Router();

import authController from "../controllers/auth.js";

router.post("/login", authController.login);
router.post("/register", authController.register);

export default router;
