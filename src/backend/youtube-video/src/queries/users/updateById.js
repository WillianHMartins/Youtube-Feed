'use strict';

const { models } = require('../../dbLoader');

const { createPasswordsHistoryByUserId } = require('./passwordsHistoryManager');
const { validatePassword } = require('./validatePassword');

module.exports = async (user, options) => {
  const {
    id,

    role = {},
    role_id,

    password,

    ...rest
  } = user;

  if (password) {
    await validatePassword(user);
    await createPasswordsHistoryByUserId(id);
  }

  const updated = await models.user.update(
    {
      role_id: role.id || role_id || undefined,
      password: password || undefined,

      ...rest,
    },
    {
      where: {
        id,
      },
      individualHooks: true,
      ...options,
    }
  );

  return updated;
};
