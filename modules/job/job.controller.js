import _ from "lodash";

import connection from "../../config/conn";

export function addJob(req, res, next) {

  const job = {
    name: req.body.name,
    hours: req.body.hours,
    isCompleted: req.body.isCompleted,
    employeeID: req.body.employeeID
  }

  connection.query('INSERT INTO jobs SET ?', job, (err, rows) => {
    if (err) return res.status(400).send(err);

    return res.send(rows);
  });
}

export function getJobs(req, res, next) {
  connection.query('SELECT * FROM jobs', (err, rows) => {
    if (err) return res.status(400).send(err);

    return res.send(rows);
  });
}

export function upJobsByID(req, res, next) {
  let jobID = req.params.jobID;

  let params = pick(req.body, ["name", "hours", "isComplete"]);

  connection.query(
    'UPDATE jobs SET ? WHERE id = ?', [params, jobID], (err, rows) => {
      if (err) return res.status(400).send(err);

      return res.send(rows);
    }
  );
}

export function deleteJobById(req, res, next) {
  let jobID = req.params.jobID;

  connection.query(
    'DELETE FROM jobs WHERE id = ?', [jobID], (err, rows) => {
      if (err) return res.status(400).send(err);

      return res.send(rows);
    }
  );
}
