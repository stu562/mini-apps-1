const Sequelize = require('sequelize');
const sequelize = require('./index.js')

//define
//sync
const Info = sequelize.define('userinfo', {
  name: Sequelize.STRING,
  email: Sequelize.STRING,
  password: Sequelize.STRING,
  line1: Sequelize.STRING,
  line2: Sequelize.STRING,
  city: Sequelize.STRING,
  zip: Sequelize.STRING,
  code: Sequelize.STRING,
})

sequelize.sync();
module.exports = Info;//ready to ship off info