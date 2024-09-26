// Ejemplo usando Sequelize para la tabla Especie
const { DataTypes, Model } = require('sequelize');
const sequelize = require('./sequelize-config'); // Configura tu conexión a la base de datos

class Especie extends Model {}
Especie.init({
  descripcion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  activo: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  usuarioCreacion: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  fechaCreacion: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  sequelize,
  modelName: 'Especie',
});

module.exports = Especie;
