
const { DataTypes } = require("sequelize");
const sequelize = require('../database/db');

const usuarios = sequelize.define('Usuarios', {
    idemail: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        unique: true,
    },
    nombre: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    apellido: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    passwordhash: {  // Asegúrate de que el nombre sea correcto aquí
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    fechacreacion: {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    },
}, {
    indexes: [
        { unique: true, fields: ['idemail'] }
    ]
});
usuarios.sync().then(() => {
    console.log('Tabla Usuarios sincronizada correctamente');
}).catch(error => {
    console.error('Error al sincronizar la tabla Usuarios:', error);
});
module.exports = usuarios;
