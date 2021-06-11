"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _employee = require("./employee.controller");

var router = (0, _express.Router)();

router.get("/", _employee.getEmployees);
router.get("/:employeeID", _employee.getEmployeeByID);
router.put("/:employeeID", _employee.updateEmployeeByID);

exports.default = router;