import connection from "../../config/conn";

export function addSupplier(req, res, next) {

  let supplier = {
    businessName: req.body.businessName,
    owner: req.body.owner,
    email: req.body.email,
    phone: req.body.phone,
    address: req.body.address
  }

  connection.query('INSERT INTO suppliers SET ?', supplier, (err, res) => {
    if (err) return res.status(400).send(err);

    return res.send(res);
  });
}

export function getSupplierByID(req, res, next) {
  let supplierID = req.params.supplierID;

  connection.query(
    'SELECT * from suppliers WHERE id = ?', [supplierID], (err, row) => {
      if (err) return res.status(400).send(err);

      return res.send(res);
    });
}

export function getSuppliers(req, res, next) {
  connection.query('SELECT * FROM suppliers', (err, rows) => {
    if (err) return res.status(400).send(err);

    return res.send(rows);
  });
}

export function updateSupplierByID(req, res, next) {
  let supplierID = req.params.supplierID;

  let params = pick(req.body, ["name", "itemID", "totalItems"]);

  connection.query(
    'UPDATE suppliers SET ? WHERE id = ?', [params, supplierID], (err, rows) => {
      if (err) return res.status(400).send(err);

      return res.send(rows);
    }
  );
}

export function deleteSupplierByID(req, res, next) {
  let supplierID = req.params.supplierID;


  connection.query(
    'DELETE FROM suppliers WHERE id = ?', [supplierID], (err, result) => {
      if (err) return res.status(400).send(err);

      return res.send(result);
    }
  );
}
