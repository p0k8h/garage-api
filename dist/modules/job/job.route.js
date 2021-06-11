"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _job = require("./job.controller");

var router = (0, _express.Router)();

router.get("/", _job.getJobs);
router.post("/", _job.addJob);
router.delete("/:jobID", _job.deleteJobById);

exports.default = router;