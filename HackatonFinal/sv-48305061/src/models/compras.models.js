const {DataTypes } = require('sequelize');
const sequelize = require('../database/db');
const usuarios = require('./usuarios.models');
const productos = require('./productos.models');

const compra = sequelize.define('compra', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true,
    },
    idemail: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: usuarios,
            key: 'idemail',
        },
    },
    producto_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: productos,
            key: 'id',
        },
    },
    fechacreacion: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
});
compra.sync().then(() => {
    console.log('Tabla compra sincronizada correctamente');
}).catch(error => {
    console.error('Error al sincronizar la tabla compra:', error);
});
module.exports = compra;
