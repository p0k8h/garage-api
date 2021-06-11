"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addJob = addJob;
exports.getJobs = getJobs;
exports.upJobsByID = upJobsByID;
exports.deleteJobById = deleteJobById;

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

var _conn = require("../../config/conn");

var _conn2 = _interopRequireDefault(_conn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addJob(req, res, next) {

  var job = {
    name: req.body.name,
    hours: req.body.hours,
    isCompleted: req.body.isCompleted,
    employeeID: req.body.employeeID
  };

  _conn2.default.query('INSERT INTO jobs SET ?', job, function (err, rows) {
    if (err) return res.status(400).send(err);

    return res.send(rows);
  });
}

function getJobs(req, res, next) {
  _conn2.default.query('SELECT * FROM jobs', function (err, rows) {
    if (err) return res.status(400).send(err);

    return res.send(rows);
  });
}

function upJobsByID(req, res, next) {
  var jobID = req.params.jobID;

  var params = pick(req.body, ["name", "hours", "isComplete"]);

  _conn2.default.query('UPDATE jobs SET ? WHERE id = ?', [params, jobID], function (err, rows) {
    if (err) return res.status(400).send(err);

    return res.send(rows);
  });
}

function deleteJobById(req, res, next) {
  var jobID = req.params.jobID;

  _conn2.default.query('DELETE FROM jobs WHERE id = ?', [jobID], function (err, rows) {
    if (err) return res.status(400).send(err);

    return res.send(rows);
  });
}