'use strict';

const findOne = require('./findOne');

const { models } = require('../../dbLoader');

class AdminDestroyError extends Error {
  constructor(message, user) {
    super(message || 'AdminDestroyError');
    this.code = 401;
    this.name = 'AdminDestroyError';
    this.user = user;
  }
}

module.exports = async where => {
  const user = await findOne(where);

  if (user && user.role && user.role.name === 'admin') {
    throw new AdminDestroyError(
      'Error while deleting admin: this registration cannot be removed'
    );
  }

  return models.user.destroy({
    where,
  });
};
