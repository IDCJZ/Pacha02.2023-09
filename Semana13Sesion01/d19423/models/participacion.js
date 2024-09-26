'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class participacion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      participacion.associate = function(models) {
        // associations can be defined here
        participacion.belongsTo(models.usuario,
            {
               
                foreignKey: 'usuario_id',
            }
        );
        participacion.belongsTo(models.juego,
            {
               
                foreignKey: 'juego_id',
            }
        );
    };
    }
  }
  participacion.init({
		usuario_id: {
			allowNull: false,
			type: DataTypes.INTEGER,
      references: {
        model: 'usuario',
        key: 'id'
   },
		},
		juego_id: {
			allowNull: false,
			type: DataTypes.INTEGER,
      references: {
        model: 'juego',
        key: 'id'
   },
		},
		status: {
			allowNull: false,
			type: DataTypes.CHAR
		}
	}
, {
    sequelize,
    modelName: 'participacion',
  });
  return participacion;
};