const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('Proyeto_final', 'root','Castillo0*', {
    host: 'localhost',
    dialect: 'mysql',
    port:3306
  });



sequelize.sync()
  .then(() => {
    console.log('Base de datos sincronizada');
  })
  .catch((error) => {
    console.error('Error al sincronizar la base de datos:', error);
  });
  module.exports = sequelize;
