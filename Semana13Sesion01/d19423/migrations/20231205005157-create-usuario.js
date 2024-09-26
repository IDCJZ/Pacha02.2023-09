'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('usuario', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            username: {
                type: Sequelize.STRING
            },
            status: {
                type: Sequelize.CHAR
            }
        });
   },
   down: (queryInterface, Sequelize) => {
       return queryInterface.dropTable('usuario');
   }
};