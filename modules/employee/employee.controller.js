import { assign, pick } from "lodash";
import connection from "../../config/conn";

export function getEmployeeByID(req, res, next) {
  let employeeID = req.params.employeeID;


  connection.query(
    'SELECT * from employees WHERE id = ?', [employeeID], (err, row) => {
      if (err) return res.status(400).send(err);

      connection.query('SELECT * from skills WHERE employeeID = ?', [employeeID], (err, row1) => {
        if (err) return res.status(400).send(err);

        return res.json({
          employee: row,
          skills: row1
        });
      }
      );
    });

}

export function getEmployees(req, res, next) {
  connection.query('SELECT * FROM employees', (err, rows) => {
    if (err) return res.status(400).send(err);

    return res.send(rows);
  });
}

export function updateEmployeeByID(req, res, next) {
  let employeeID = req.params.employeeID;

  let params = pick(req.body, ["firstName", "lastName", "email", "phone", "address"]);

  connection.query(
    'UPDATE employees SET ? WHERE id = ?', [params, employeeID], (err, rows) => {
      if (err) return res.status(400).send(err);

      return res.send(rows);
    }
  );
}
