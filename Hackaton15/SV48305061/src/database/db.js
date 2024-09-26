const mysql = require('mysql2/promise')

const conexion = mysql.createPool({
    host: 'localhost',
    port: process.env.portdatabase,
    user: 'root',
    password: 'Castillo0*',
    database: 'hackaton15',
});
conexion.getConnection(function (err) {
    if (err) {
        console.error('Error al conectar a la base de datos: ' + err.stack);
        return;
    }
    console.log('Conectado exitosamente a la base de datos');
});

conexion.query('create table IF NOT EXISTS Mensajes (id int NOT NULL primary KEY auto_increment,usuario varchar(225),destino varchar(225), mensage varchar(500))'), function (erro, results) {
    if (err) {
        console.error('Error al crear la tabla:', err);
        console.log(query);
    }};

module.exports = conexion;
