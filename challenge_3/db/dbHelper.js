const Info = require('./schema.js');

//create a new user 
const createUser = (name) => {
  return Info.create({ name });
}

//if we need to find a user 
// const findUser = () => {
//   return Item.findAll({});
// }

module.exports = {
  createUser,
  // findUser
}