import { Router } from "express";
const router = Router();

import { addOrder, getOrders, upOrdersByID, deleteOrderById } from "../order/order.controller"

router.get("/", getOrders);
router.post("/", addOrder);
router.post("/:orderID", upOrdersByID);
router.delete("/:orderID", deleteOrderById);

export default router;
