import { Router } from "express";
const router = Router();

import { login } from "./auth.controller";
import { register } from "./auth.controller";

router.post("/login", login);
router.post("/register", register);

export default router;
