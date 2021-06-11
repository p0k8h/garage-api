"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _customer = require("./customer.controller");

var router = (0, _express.Router)();

router.get("/", _customer.getCustomers);
router.get("/:customerID", _customer.getCustomerByID);
router.post("/", _customer.addCustomer);
router.put("/:customerID", _customer.updateCustomerByID);
router.delete("/:customerID", _customer.deleteCustomerByID);

exports.default = router;