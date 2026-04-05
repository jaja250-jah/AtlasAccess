const jwt = require("jsonwebtoken");
const { secret } = require("../config/jwtConfig");

module.exports = function(payload) {
  return jwt.sign(payload, secret, { expiresIn: "1d" });
  };