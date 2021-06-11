import { Router } from "express";
const router = Router();

import { getEmployeeByID, getEmployees, updateEmployeeByID } from "./employee.controller"

router.get("/", getEmployees);
router.get("/:employeeID", getEmployeeByID);
router.put("/:employeeID", updateEmployeeByID);

export default router;
