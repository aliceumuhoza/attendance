const mysql = require('mysql');

// Create a connection pool to the MySQL database
const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'bfxpj7wl76ghazzlr2m1-mysql.services.clever-cloud.com',
  user: 'uvpancnsdjgep8kd',
  password: '0k2USAy3pYfYmMp8eLQD',
  database: 'bfxpj7wl76ghazzlr2m1'
});

module.exports = pool;
