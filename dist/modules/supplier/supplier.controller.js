'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addSupplier = addSupplier;
exports.getSupplierByID = getSupplierByID;
exports.getSuppliers = getSuppliers;
exports.updateSupplierByID = updateSupplierByID;
exports.deleteSupplierByID = deleteSupplierByID;

var _conn = require('../../config/conn');

var _conn2 = _interopRequireDefault(_conn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addSupplier(req, res, next) {

  var supplier = {
    businessName: req.body.businessName,
    owner: req.body.owner,
    email: req.body.email,
    phone: req.body.phone,
    address: req.body.address
  };

  _conn2.default.query('INSERT INTO suppliers SET ?', supplier, function (err, res) {
    if (err) return res.status(400).send(err);

    return res.send(res);
  });
}

function getSupplierByID(req, res, next) {
  var supplierID = req.params.supplierID;

  _conn2.default.query('SELECT * from suppliers WHERE id = ?', [supplierID], function (err, row) {
    if (err) return res.status(400).send(err);

    return res.send(res);
  });
}

function getSuppliers(req, res, next) {
  _conn2.default.query('SELECT * FROM suppliers', function (err, rows) {
    if (err) return res.status(400).send(err);

    return res.send(rows);
  });
}

function updateSupplierByID(req, res, next) {
  var supplierID = req.params.supplierID;

  var params = pick(req.body, ["name", "itemID", "totalItems"]);

  _conn2.default.query('UPDATE suppliers SET ? WHERE id = ?', [params, supplierID], function (err, rows) {
    if (err) return res.status(400).send(err);

    return res.send(rows);
  });
}

function deleteSupplierByID(req, res, next) {
  var supplierID = req.params.supplierID;

  _conn2.default.query('DELETE FROM suppliers WHERE id = ?', [supplierID], function (err, result) {
    if (err) return res.status(400).send(err);

    return res.send(result);
  });
}