import { Router } from "express";

import {
  addCustomer,
  deleteCustomerByID,
  getCustomerByID,
  getCustomers,
  updateCustomerByID
} from "./customer.controller";

const router = Router();

router.get("/", getCustomers);
router.get("/:customerID", getCustomerByID);
router.post("/", addCustomer);
router.put("/:customerID", updateCustomerByID);
router.delete("/:customerID", deleteCustomerByID);

export default router;
