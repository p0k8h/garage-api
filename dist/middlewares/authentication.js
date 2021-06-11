"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _user = require("../modules/supplier/model/user.model");

var _user2 = _interopRequireDefault(_user);

var _jwt = require("../helpers/jwt.helper");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req, res, next) {
  var token = (0, _jwt.getToken)(req.headers);

  if (token) {
    try {
      var decoded = (0, _jwt.decodeToken)(token);
      req.user = decoded.user;
      _user2.default.findById(req.user._id).then(function (user) {
        if (user) {
          if (!user.active_status) return res.status(401).json({
            message: "Authentication failed, Your account has been disabled! Contact Admin"
          });else return next();
        } else {
          return res.status(400).json({
            message: "The user does not exist!"
          });
        }
      }).catch(function (err) {
        return res.status(500).json({ message: err });
      });
    } catch (error) {
      res.status(403).json({
        message: "Invalid Token!"
      });
    }
  } else {
    res.status(401).json({
      message: "UnAuthorized, No token provided!"
    });
  }
};