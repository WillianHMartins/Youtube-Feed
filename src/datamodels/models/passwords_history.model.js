

'use strict';

const matchPassword = require('../user.utils');

module.exports = (sequelize, DataTypes) => {
  const passwords_history = sequelize.define(
  'passwords_history',
  {
    password: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
  },
  {
    tableName: 'passwords_history',
  }
);

    /**
   * Checks if the parameter matches stored password
   * @param password
   */
  passwords_history.prototype.matchPassword = matchPassword;

  return passwords_history
}
