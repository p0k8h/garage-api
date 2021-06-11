const mysql = require('mysql');

const connection = mysql.createPool({
  connectionLimit : 10,
  host: 'remotemysql.com',
  user: 'sGgQPuz0nW',
  password: 'yFoAL2Kpb2',
  database: 'sGgQPuz0nW',
});

export default connection;
