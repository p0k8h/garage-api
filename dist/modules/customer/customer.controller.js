"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCustomerByID = getCustomerByID;
exports.getCustomers = getCustomers;
exports.addCustomer = addCustomer;
exports.updateCustomerByID = updateCustomerByID;
exports.deleteCustomerByID = deleteCustomerByID;

var _lodash = require("lodash");

var _conn = require("../../config/conn");

var _conn2 = _interopRequireDefault(_conn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getCustomerByID(req, res, next) {
  var customerID = req.params.customerID;

  _conn2.default.query('SELECT * from customers WHERE id = ?', [customerID], function (err, row) {
    if (err) return res.status(400).send(err);

    return row;
  });
}

function getCustomers(req, res, next) {
  _conn2.default.query('SELECT * FROM customers', function (err, rows) {
    if (err) return res.status(400).send(err);

    return res.send(rows);
  });
}

function addCustomer(req, res, next) {

  var customer = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phone: req.body.phone,
    address: req.body.address
  };

  _conn2.default.query('INSERT INTO customers SET ?', customer, function (err, rows, fields) {
    if (err) return res.status(400).send(err);

    return res.send(rows);
  });
}

function updateCustomerByID(req, res, next) {
  var customerID = req.params.customerID;

  var params = (0, _lodash.pick)(req.body, ["firstName", "lastName", "email", "phone", "address"]);

  _conn2.default.query('UPDATE customers SET ? WHERE id = ?', [params, customerID], function (err, rows) {
    if (err) return res.status(400).send(err);

    return res.send(rows);
  });
}

function deleteCustomerByID(req, res, next) {
  var customerID = req.params.customerID;

  _conn2.default.query('DELETE FROM customers WHERE id = ?', [customerID], function (err, result) {
    if (err) return res.status(400).send(err);

    return res.send(result);
  });
}