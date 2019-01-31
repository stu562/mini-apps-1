//creating database using sequelize
const Sequelize = require('sequelize');
const sequelize = new Sequelize('userinfo','root','', {
  host:'localhost',
  dialect: 'mysql',

  // is this needed? 
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  operatorsAliases: false

})
module.exports = sequelize;