import { Router } from "express";

import {
  addStock,
  getStocks,
  updateStockByID,
  deleteStockById
} from "./stock.controller";

const router = Router();

router.get("/", getStocks);
router.post("/", addStock);
router.put("/:stockID", updateStockByID);
router.delete("/:stockID", deleteStockById);

export default router;
