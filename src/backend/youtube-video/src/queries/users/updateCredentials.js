'use strict';

const token = require('../../auth/token');

const { models } = require('../../dbLoader');

const { createPasswordsHistoryByUserId } = require('./passwordsHistoryManager');
const { validatePassword } = require('./validatePassword');

class ValidateCurrentPasswordError extends Error {
  constructor(message) {
    super(message || 'ValidateCurrentPasswordError');
    this.code = 400;
    this.name = 'ValidateCurrentPasswordError';
  }
}

const validateCurrentPassword = async user => {
  const { id, current_password, password } = user;

  const current = await models.user.findOne({
    where: {
      id,
    },
  });

  if (!current_password) {
    throw new ValidateCurrentPasswordError('Current password is required');
  }

  if (!current) {
    throw new ValidateCurrentPasswordError(
      'Could not validate current password, user does not exist'
    );
  }

  if (current_password === password) {
    throw new ValidateCurrentPasswordError(
      'Current password is equal to new password'
    );
  }

  if (!(await current.matchPassword(current_password))) {
    throw new ValidateCurrentPasswordError(
      'Could not validate current password'
    );
  }
};

module.exports = async (user, options) => {
  const { id, password } = user;
  await validateCurrentPassword(user);
  await validatePassword(user);
  await createPasswordsHistoryByUserId(id);

  await models.user.update(
    {
      password,
    },
    {
      where: {
        id,
      },
      individualHooks: true,
      ...options,
    }
  );

  const updatedUser = await models.user.findOne({
    where: {
      id,
    },
  });

  return token.create(updatedUser);
};
