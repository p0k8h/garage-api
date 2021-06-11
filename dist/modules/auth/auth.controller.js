"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = login;
exports.register = register;

var _lodash = require("lodash");

var _auth = require("./auth.query");

function login(req, res, next) {

  var params = (0, _lodash.pick)(req.body, ["email", "password"]);

  (0, _auth.login)(params).then(function (response) {
    res.send(response);
  }).catch(function (err) {
    res.status(400).send(err);
  });
}

function register(req, res, next) {
  var params = (0, _lodash.pick)(req.body, ["email", "password", "role"]);

  (0, _auth.register)(params).then(function (response) {
    res.send(response);
  }).catch(function (err) {
    res.status(400).send(err);
  });
}