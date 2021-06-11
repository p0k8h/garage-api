import { Router } from "express";
const router = Router();

import { addSupplier, getSupplierByID, getSuppliers, updateSupplierByID, deleteSupplierByID } from "./supplier.controller";

router.get("/", getSuppliers);
router.post("/", addSupplier);
router.get("/:supplierID", getSupplierByID);
router.put("/:supplierID", updateSupplierByID);
router.delete("/:supplierID", deleteSupplierByID);

export default router;
