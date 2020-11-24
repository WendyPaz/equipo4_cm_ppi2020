const mysql = require('mysql')
const connection = mysql.createConnection({
  host:"b7kpfpmz9agyxi4ysfhb-mysql.services.clever-cloud.com",
  user:"untzi9qxelhibcuy",
  password:"XcZ2jlw3FviKmbSc7Fxd",
  database:"b7kpfpmz9agyxi4ysfhb"
});

connection.connect((error) => {
    if(error){
      console.log(`Error en conexión a base de datos: ${error}`)
      return;
    }else{
      console.log("Conexión extablecida con el servidor de MySQL")
    }
});

module.exports =  {connection: connection}