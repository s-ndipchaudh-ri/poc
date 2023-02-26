var Sequelize = require("sequelize");
var sequelize = require("../dbConfig").sequelize;

module.exports = {
  price: require('./price')(Sequelize, sequelize, Sequelize.DataTypes)
}