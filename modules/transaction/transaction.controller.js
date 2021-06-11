import connection from "../../../config/conn";

export function getCustomerByID(req, res, next) {

  let transaction = {
    amount: req.body.amount,
    customerID: req.body.customerID,
    status: req.body.status
  }
  connection.query('INSERT INTO transactions SET ?', transaction, (err, res) => {
    if (err) return res.status(400).send(err);

    return res.send(res);
  });
}
