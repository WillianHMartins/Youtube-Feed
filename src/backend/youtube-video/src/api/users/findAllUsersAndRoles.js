'use strict';

const Promise = require('bluebird');

const errorHandler = require('../errors');
const findAllUsers = require('../../queries/users/findAll');
const findAllRoles = require('../../queries/roles/findAll');

module.exports = async ctx => {
  try {
    ctx.status = 200; // OK
    const [users, roles] = await Promise.all([
      findAllUsers(),
      findAllRoles({ is_active: true }),
    ]);
    ctx.body = {
      status: ctx.status,
      users,
      roles,
    };
  } catch (error) {
    errorHandler(ctx, error);
  }
};
