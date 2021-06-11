"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addOrder = addOrder;
exports.getOrders = getOrders;
exports.upOrdersByID = upOrdersByID;
exports.deleteOrderById = deleteOrderById;

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

var _conn = require("../../config/conn");

var _conn2 = _interopRequireDefault(_conn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addOrder(req, res, next) {

  var order = {
    amount: req.body.amount,
    employeeID: req.body.employeeID,
    partName: req.body.partName,
    modelNumber: req.body.modelNumber,
    size: req.body.size,
    quantity: req.body.quantity
  };

  _conn2.default.query('INSERT INTO orders SET ?', [order], function (err, row) {
    if (err) return res.status(400).send(err);

    return res.send(row);
  });
}

function getOrders(req, res, next) {
  _conn2.default.query('SELECT * FROM orders', function (err, rows) {
    if (err) return res.status(400).send(err);

    return res.send(rows);
  });
}

function upOrdersByID(req, res, next) {
  var orderID = req.params.orderID;

  var params = pick(req.body, ["amount", "partName", "modelNumber", "size", "quantity"]);

  _conn2.default.query('UPDATE orders SET ? WHERE id = ?', [params, orderID], function (err, rows) {
    if (err) return res.status(400).send(err);

    return res.send(rows);
  });
}

function deleteOrderById(req, res, next) {
  var orderID = req.params.orderID;

  _conn2.default.query('DELETE FROM orders WHERE id = ?', [orderID], function (err, result) {
    if (err) return res.status(400).send(err);

    return res.send(result);
  });
}