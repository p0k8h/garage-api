import { assign, pick } from "lodash";
import connection from "../../config/conn";

export function getStocks(req, res, next) {
  connection.query('SELECT * FROM stocks', (err, rows) => {
    if (err) return res.status(400).send(err);

    return res.send(rows);
  });
}

export function addStock(req, res, next) {

  const stock = {
    itemID: req.body.itemID,
    totalItems: req.body.totalItems,
    name: req.body.name
  };

  connection.query('INSERT INTO stocks SET ?', stock, (err, rows) => {
    if (err) return res.status(400).send(err);

    return res.send(rows);
  });
}

export function updateStockByID(req, res, next) {
  let stockID = req.params.stockID;

  let params = pick(req.body, ["name", "itemID", "totalItems"]);

  connection.query(
    'UPDATE stocks SET ? WHERE id = ?', [params, stockID], (err, rows) => {
      if (err) return res.status(400).send(err);

      return res.send(rows);
    }
  );
}

export function deleteStockById(req, res, next) {
  let stockID = req.params.stockID;

  connection.query(
    'DELETE FROM stocks WHERE id = ?', [stockID], (err, result) => {
      if (err) return res.status(400).send(err);

      return res.send(result);
    }
  );
}
