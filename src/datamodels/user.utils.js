"use strict";

const bcrypt = require("bcryptjs");

/**
 * Checks if the parameter matches stored password
 * @param password
 */
function matchPassword(password) {
  if (!password || !this.password) return false;
  return bcrypt.compareSync(password, this.password);
}

module.exports = matchPassword;
