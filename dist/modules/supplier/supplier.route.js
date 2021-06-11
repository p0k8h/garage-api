"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _supplier = require("./supplier.controller");

var router = (0, _express.Router)();

router.get("/", _supplier.getSuppliers);
router.post("/", _supplier.addSupplier);
router.get("/:supplierID", _supplier.getSupplierByID);
router.put("/:supplierID", _supplier.updateSupplierByID);
router.delete("/:supplierID", _supplier.deleteSupplierByID);

exports.default = router;