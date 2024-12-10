const { Sequelize, DataTypes } = require("sequelize");
const dbConfig = require("../config/db.config");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.DIALECT,
  pool: dbConfig.POOL,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Import model
db.Property = require("./property.model.js")(sequelize, DataTypes);

module.exports = db;
