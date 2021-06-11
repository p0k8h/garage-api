import { assign, pick } from "lodash";
import connection from "../../config/conn";

export function getCustomerByID(req, res, next) {
  let customerID = req.params.customerID;

  connection.query(
    'SELECT * from customers WHERE id = ?', [customerID], (err, row) => {
      if (err) return res.status(400).send(err);

      return (row);
    }
  );
}

export function getCustomers(req, res, next) {
  connection.query('SELECT * FROM customers', (err, rows) => {
    if (err) return res.status(400).send(err);

    return res.send(rows);
  });
}

export function addCustomer(req, res, next) {

  const customer = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phone: req.body.phone,
    address: req.body.address,
  };

  connection.query('INSERT INTO customers SET ?', customer, (err, rows, fields) => {
    if (err) return res.status(400).send(err);

    return res.send(rows);
  });
}

export function updateCustomerByID(req, res, next) {
  let customerID = req.params.customerID;

  let params = pick(req.body, ["firstName", "lastName", "email", "phone", "address"]);

  connection.query(
    'UPDATE customers SET ? WHERE id = ?', [params, customerID], (err, rows) => {
      if (err) return res.status(400).send(err);

      return res.send(rows);
    }
  );
}

export function deleteCustomerByID(req, res, next) {
  let customerID = req.params.customerID;

  connection.query(
    'DELETE FROM customers WHERE id = ?', [customerID], (err, result) => {
      if (err) return res.status(400).send(err);

      return res.send(result);
    }
  );
}
