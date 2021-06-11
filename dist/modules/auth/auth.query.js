"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.login = login;
exports.register = register;

var _jwt = require("../../helpers/jwt.helper");

var _conn = require("../../config/conn");

var _conn2 = _interopRequireDefault(_conn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function login(params) {
  var email = params.email,
      password = params.password;

  console.log('pp', params);
  return new Promise(function (resolve, reject) {

    _conn2.default.query('SELECT * FROM employees WHERE email = ?', [email], function (err, rows) {

      if (err) return reject(err);

      console.log("==", rows);

      if (!rows.length) {
        return reject({
          message: "Authenticated failed. User not found!"
        });
      } else {
        var _rows = _slicedToArray(rows, 1),
            user = _rows[0];

        var doesPasswordMatch = user.password === password;

        if (!doesPasswordMatch) {
          return reject({
            message: "Password doesn't match"
          });
        } else {
          var token = (0, _jwt.generateToken)(user);

          return resolve({
            user: user,
            token: token
          });
        }
      }
    });
  });
}

// Roles
/**
 * 1 - Office Assistant
 * 2- Mechanics
 * 3 - Owner
 */

function register(params) {
  var email = params.email,
      password = params.password,
      role = params.role;


  console.log(params);

  return new Promise(function (resolve, reject) {

    var employee = {
      email: email, password: password, role: role
    };

    _conn2.default.query('INSERT INTO employees SET ?', employee, function (err, res) {

      console.log("ddd", err, res);

      if (err) return reject(err);

      resolve(res);
    });
  });
}