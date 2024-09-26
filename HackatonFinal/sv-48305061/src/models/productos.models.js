const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');

const productos = sequelize.define('productos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    precio: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    imagen: {
        type: DataTypes.STRING,
        allowNull: false,
    }, 
    estado: {
        type: DataTypes.STRING, 
        allowNull: false,
        defaultValue: 'Activo',
    },
},{
    indexes: [
        { unique: true, fields: ['id'] }
    ]
});
productos.sync().then(() => {
    console.log('Tabla productos sincronizada correctamente');
}).catch(error => {
    console.error('Error al sincronizar la tabla productos:', error);
});
module.exports = productos;
