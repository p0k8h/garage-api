import _ from "lodash";

import connection from "../../config/conn";

export function addOrder(req, res, next) {

  const order = {
    amount: req.body.amount,
    employeeID: req.body.employeeID,
    partName: req.body.partName,
    modelNumber: req.body.modelNumber,
    size: req.body.size,
    quantity: req.body.quantity,
  }

  connection.query('INSERT INTO orders SET ?', [order], (err, row) => {
    if (err) return res.status(400).send(err);

    return res.send(row);
  });
}

export function getOrders(req, res, next) {
  connection.query('SELECT * FROM orders', (err, rows) => {
    if (err) return res.status(400).send(err);

    return res.send(rows);
  });
}

export function upOrdersByID(req, res, next) {
  let orderID = req.params.orderID;

  let params = pick(req.body, ["amount", "partName", "modelNumber", "size", "quantity"]);

  connection.query(
    'UPDATE orders SET ? WHERE id = ?', [params, orderID], (err, rows) => {
      if (err) return res.status(400).send(err);

      return res.send(rows);
    }
  );
}

export function deleteOrderById(req, res, next) {
  let orderID = req.params.orderID;

  connection.query(
    'DELETE FROM orders WHERE id = ?', [orderID], (err, result) => {
      if (err) return res.status(400).send(err);

      return res.send(result);
    }
  );
}
