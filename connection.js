const mysql = require('mysql');

// Create a connection pool to the MySQL database
const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'bpehtwu183navbxyafcq-mysql.services.clever-cloud.com',
  user: 'un26vhrj8smlidsg',
  password: '0Q4kTtozkRVRABtWk9yu',
  database: 'bpehtwu183navbxyafcq'
});

module.exports = pool;
