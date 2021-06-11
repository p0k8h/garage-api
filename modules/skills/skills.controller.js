import { assign, pick } from "lodash";
import connection from "../../config/conn"


export function addSkillToEmployee(req, res, next) {
  const employeeID = req.params.employeeID;

  const skill = {
    name: req.body.name,
    dateReceived: req.body.dateReceived,
    employeeID
  };

  connection.query('INSERT INTO skills SET ?', skill, (err, row) => {
    if (err) return res.status(400).send(err);

    return res.send(row);
  });
}
