const { isBefore, subDays } = require('date-fns');

const { models } = require('../../dbLoader');
const token = require('../../auth/token');

class FirstLoginPasswordUpdateError extends Error {
  constructor(message, user) {
    super(message || 'FirstLoginPasswordUpdateError');
    this.code = 401;
    this.name = 'FirstLoginPasswordUpdateError';
    this.user = user;
  }
}

class LastPasswordUpdateError extends Error {
  constructor(message, user) {
    super(message || 'LastPasswordUpdateError');
    this.code = 401;
    this.name = 'LastPasswordUpdateError';
    this.user = user;
  }
}

class UserTokenCreateError extends Error {
  constructor(message) {
    super(message || 'UserTokenCreateError');
    this.code = 401;
    this.name = 'UserTokenCreateError';
  }
}

class UserTokenCreateRoleError extends Error {
  constructor(message) {
    super(message || 'UserTokenCreateRoleError');
    this.code = 401;
    this.name = 'UserTokenCreateRoleError';
  }
}

module.exports = async login => {
  const user = await models.user.findOne({
    include: [
      {
        attributes: ['id', 'name', 'description', 'is_active'],
        model: models.role,
      },
    ],
    where: {
      username: login.username,
    },
  });

  if (!user || !(await user.matchPassword(login.password))) {
    throw new UserTokenCreateError(
      `Could not authenticate: Invalid username or password`
    );
  }

  if (!user.role || !user.role.is_active) {
    throw new UserTokenCreateRoleError(
      'The authentication token could not be created:' +
        ' The User Profile associated with your user has been disabled,' +
        ' contact your administrator'
    );
  }

  const { id, last_password_update, name, username } = user;

  if (!last_password_update) {
    throw new FirstLoginPasswordUpdateError(
      'The authentication token could not be created: you must update' +
        ' the password to log in',
      { id, last_password_update, name, username }
    );
  }

  const lastPasswordUpdateLimit = 90;
  if (
    isBefore(
      new Date(last_password_update),
      subDays(new Date(), lastPasswordUpdateLimit)
    )
  ) {
    throw new LastPasswordUpdateError(
      'The authentication token could not be created: user password is' +
        ' expired, you must update the password to log in',
      { id, last_password_update, name, username }
    );
  }

  return await token.create(user);
};
