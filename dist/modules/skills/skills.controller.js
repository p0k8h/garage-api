"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addSkillToEmployee = addSkillToEmployee;

var _lodash = require("lodash");

var _conn = require("../../config/conn");

var _conn2 = _interopRequireDefault(_conn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addSkillToEmployee(req, res, next) {
  var employeeID = req.params.employeeID;

  var skill = {
    name: req.body.name,
    dateReceived: req.body.dateReceived,
    employeeID: employeeID
  };

  _conn2.default.query('INSERT INTO skills SET ?', skill, function (err, row) {
    if (err) return res.status(400).send(err);

    return res.send(row);
  });
}