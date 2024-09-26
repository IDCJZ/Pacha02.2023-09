const mysql = require("mysql2/promise");

const conexion = mysql.createPool({
    host:  'localhost',
    port: 3306,
    database:'hackaton14',
    user: 'root',
    password:'Castillo0*'
});

conexion.getConnection(function(err) {
    if (err) {
      console.error('Error al conectar a la base de datos: ' + err.stack);
      return;
    }
    console.log('Conectado exitosamente a la base de datos');
});

module.exports = conexion