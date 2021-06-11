"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStocks = getStocks;
exports.addStock = addStock;
exports.updateStockByID = updateStockByID;
exports.deleteStockById = deleteStockById;

var _lodash = require("lodash");

var _conn = require("../../config/conn");

var _conn2 = _interopRequireDefault(_conn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStocks(req, res, next) {
  _conn2.default.query('SELECT * FROM stocks', function (err, rows) {
    if (err) return res.status(400).send(err);

    return res.send(rows);
  });
}

function addStock(req, res, next) {

  var stock = {
    itemID: req.body.itemID,
    totalItems: req.body.totalItems,
    name: req.body.name
  };

  _conn2.default.query('INSERT INTO stocks SET ?', stock, function (err, rows) {
    if (err) return res.status(400).send(err);

    return res.send(rows);
  });
}

function updateStockByID(req, res, next) {
  var stockID = req.params.stockID;

  var params = (0, _lodash.pick)(req.body, ["name", "itemID", "totalItems"]);

  _conn2.default.query('UPDATE stocks SET ? WHERE id = ?', [params, stockID], function (err, rows) {
    if (err) return res.status(400).send(err);

    return res.send(rows);
  });
}

function deleteStockById(req, res, next) {
  var stockID = req.params.stockID;

  _conn2.default.query('DELETE FROM stocks WHERE id = ?', [stockID], function (err, result) {
    if (err) return res.status(400).send(err);

    return res.send(result);
  });
}