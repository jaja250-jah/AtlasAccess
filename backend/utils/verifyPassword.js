const bcrypt = require("bcryptjs");

module.exports = function(password, hashed) {
  return bcrypt.compareSync(password, hashed);
  };