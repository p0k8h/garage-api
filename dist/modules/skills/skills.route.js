"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _skills = require("../skills/skills.controller");

var router = (0, _express.Router)();

router.post("/:employeeID", _skills.addSkillToEmployee);

exports.default = router;