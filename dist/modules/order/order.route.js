"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _order = require("../order/order.controller");

var router = (0, _express.Router)();

router.get("/", _order.getOrders);
router.post("/", _order.addOrder);
router.post("/:orderID", _order.upOrdersByID);
router.delete("/:orderID", _order.deleteOrderById);

exports.default = router;