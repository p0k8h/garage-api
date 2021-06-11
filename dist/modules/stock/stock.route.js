"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _stock = require("./stock.controller");

var router = (0, _express.Router)();

router.get("/", _stock.getStocks);
router.post("/", _stock.addStock);
router.put("/:stockID", _stock.updateStockByID);
router.delete("/:stockID", _stock.deleteStockById);

exports.default = router;