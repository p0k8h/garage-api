"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _cors = require("cors");

var _cors2 = _interopRequireDefault(_cors);

var _chalk = require("chalk");

var _chalk2 = _interopRequireDefault(_chalk);

var _routes = require("./routes");

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var env = process.env.NODE_ENV || "dev";

// import mySqlConfig from "./config/mysql";

var PORT = process.env.PORT || 4000;

var app = (0, _express2.default)();
app.use((0, _cors2.default)());
app.use("/public", _express2.default.static(__dirname + '/public'));
app.use(_express2.default.json()); // for parsing application/json
app.use(_express2.default.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

(0, _routes2.default)(app);

app.get("/", function (req, res, next) {
  return res.send("Hello from API");
});

app.listen(PORT, function () {
  console.log("%s  Serving API at http://localhost:%d in %s mode\n", _chalk2.default.green("✅"), PORT, env);
  console.log("PRESS CTRL+C to stop\n");
});