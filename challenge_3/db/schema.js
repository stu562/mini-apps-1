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
  creditNumber: Sequelize.STRING,
  expiry: Sequelize.STRING,
  cvv: Sequelize.STRING,
  billingZip:'',
})

sequelize.sync()
  // .then(() => Info.create())
  // .catch((err) => console.log(err))
module.exports = Info;//ready to ship off info