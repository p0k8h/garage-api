import { Router } from "express";
const router = Router();

import { addSkillToEmployee } from "../skills/skills.controller"

router.post("/:employeeID", addSkillToEmployee);

export default router;
