"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getEmployeeByID = getEmployeeByID;
exports.getEmployees = getEmployees;
exports.updateEmployeeByID = updateEmployeeByID;

var _lodash = require("lodash");

var _conn = require("../../config/conn");

var _conn2 = _interopRequireDefault(_conn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getEmployeeByID(req, res, next) {
  var employeeID = req.params.employeeID;

  _conn2.default.query('SELECT * from employees WHERE id = ?', [employeeID], function (err, row) {
    if (err) return res.status(400).send(err);

    _conn2.default.query('SELECT * from skills WHERE employeeID = ?', [employeeID], function (err, row1) {
      if (err) return res.status(400).send(err);

      return res.json({
        employee: row,
        skills: row1
      });
    });
  });
}

function getEmployees(req, res, next) {
  _conn2.default.query('SELECT * FROM employees', function (err, rows) {
    if (err) return res.status(400).send(err);

    return res.send(rows);
  });
}

function updateEmployeeByID(req, res, next) {
  var employeeID = req.params.employeeID;

  var params = (0, _lodash.pick)(req.body, ["firstName", "lastName", "email", "phone", "address"]);

  _conn2.default.query('UPDATE employees SET ? WHERE id = ?', [params, employeeID], function (err, rows) {
    if (err) return res.status(400).send(err);

    return res.send(rows);
  });
}