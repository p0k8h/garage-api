"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _auth = require("./auth.controller");

var router = (0, _express.Router)();

router.post("/login", _auth.login);
router.post("/register", _auth.register);

exports.default = router;