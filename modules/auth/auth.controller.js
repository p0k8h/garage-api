import { pick } from "lodash";

import { login as loginQ, register as registerQ } from "./auth.query";

export function login(req, res, next) {

  let params = pick(req.body, ["email", "password"]);

  loginQ(params)
    .then(function(response) {
      res.send(response);
    })
    .catch(function(err) {
      res.status(400).send(err);
    });
}

export function register(req, res, next) {
  let params = pick(req.body, ["email", "password", "role"]);

  registerQ(params)
    .then(function(response) {
      res.send(response);
    })
    .catch(function(err) {
      res.status(400).send(err);
    });
}
