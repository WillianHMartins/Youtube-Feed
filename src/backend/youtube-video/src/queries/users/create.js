'use strict';

const { validatePassword } = require('./validatePassword');

const { models } = require('../../dbLoader');

module.exports = async (user, options = {}) => {
  const {
    role = {},
    role_id,

    password,

    ...rest
  } = user;

  await validatePassword(user);

  return await models.user.create(
    {
      role_id: role.id || role_id,
      password,
      ...rest,
    },
    options
  );
};
