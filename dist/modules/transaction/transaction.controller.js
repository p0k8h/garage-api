"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCustomerByID = getCustomerByID;

var _conn = require("../../../config/conn");

var _conn2 = _interopRequireDefault(_conn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getCustomerByID(req, res, next) {

  var transaction = {
    amount: req.body.amount,
    customerID: req.body.customerID,
    status: req.body.status
  };
  _conn2.default.query('INSERT INTO transactions SET ?', transaction, function (err, res) {
    if (err) return res.status(400).send(err);

    return res.send(res);
  });
}