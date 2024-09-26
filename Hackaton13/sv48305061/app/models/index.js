const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.logins = require("./login.model.js")(sequelize, Sequelize);
db.cursos = require("./curso.model.js")(sequelize, Sequelize);
db.tag = require("./tag.model.js")(sequelize, Sequelize);
db.pagos=require("./pagos.model.js")(sequelize,Sequelize);
db.tag.belongsToMany(db.logins, {
  through: "login_tag",
  as: "login",
  foreignKey: "tag_id",
});
db.logins.belongsToMany(db.tag, {
  through: "login_tag",
  as: "tags",
  foreignKey: "login_id",
});



db.logins.hasMany(db.cursos, { as: "cursos" });
db.cursos.belongsTo(db.logins, {
  foreignKey: "loginId",
  as: "login",
});
db.pagos.belongsToMany(db.tag,{
  through: "pagos_tag",
  as:"tags",
  foreignKey:"pagos_id"
});
db.tag.belongsToMany(db.pagos,{
  through: "pagos_tag",
  as: "pagos",
  foreignKey: "pagos_id",
})
module.exports = db;
