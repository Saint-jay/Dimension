let mysql = require('mysql');
let connection = mysql.createConnection({
  host: 'http://localhost',
  user: '****',
  password: '****',
});

module.exports = connection;