"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateToken = generateToken;
exports.decodeToken = decodeToken;
exports.getToken = getToken;

var _jsonwebtoken = require("jsonwebtoken");

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var JWT_SECRET = process.env.JWT_SECRET || "xyz123";

function generateToken(user) {
  var payload = {
    sub: "garage",
    user: _lodash2.default.pick(user, ["role", "id", "email"]),
    iat: (0, _moment2.default)().unix(),
    exp: (0, _moment2.default)().add(7, "day").unix()
  };

  return _jsonwebtoken2.default.sign(payload, JWT_SECRET);
}

function decodeToken(token) {
  if (token) {
    var decoded = _jsonwebtoken2.default.verify(token, JWT_SECRET);
    return decoded;
  }
  return null;
}

function getToken(headers) {
  if (headers && headers.authorization) {
    var parted = headers.authorization.split(" ");
    return parted[0] === "Bearer" && parted.length === 2 ? parted[1] : null;
  }
  return null;
}