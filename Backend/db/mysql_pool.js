const util = require('util')
var mysql = require('mysql');
require('dotenv').config()
var mysqlConnection  = mysql.createPool({
  connectionLimit: 10,
  host:"b7kpfpmz9agyxi4ysfhb-mysql.services.clever-cloud.com",
  user:"untzi9qxelhibcuy",
  password:"XcZ2jlw3FviKmbSc7Fxd",
  database:"b7kpfpmz9agyxi4ysfhb"
})

mysqlConnection.on('release', (connection)=>{
  console.log('connection %d released', mysqlConnection.threadId);
})

mysqlConnection.query = util.promisify(mysqlConnection.query);

module.exports = mysqlConnection;