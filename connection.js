const mysql = require('mysql')
const mysqlConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'retailo'
})

mysqlConnection.connect(function (err) {
  if (!err) {
    console.log('Database Connected')
  } else {
    console.log('Database Not Connected')
  }
})

module.exports = mysqlConnection
