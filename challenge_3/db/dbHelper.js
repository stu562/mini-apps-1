const Info = require('./schema.js');

//create a new user 
const createUser = (name, email) => {
  return Info.create({ name, email });
}

//if we need to find a user 
const getUser = () => {
  return Info.findAll({});
}

module.exports = {
  createUser,
  getUser
}