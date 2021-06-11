'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var mysql = require('mysql');

var connection = mysql.createPool({
  connectionLimit: 10,
  host: 'remotemysql.com',
  user: 'sGgQPuz0nW',
  password: 'yFoAL2Kpb2',
  database: 'sGgQPuz0nW'
});

exports.default = connection;