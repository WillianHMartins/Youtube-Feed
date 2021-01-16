'use strict';

const errorHandler = require('../errors');
const login = require('../../queries/users/login');

module.exports = async ctx => {
  try {
    const user = ctx.request.body;

    ctx.status = 200; // OK
    ctx.body = {
      status: ctx.status,
      token: await login(user),
    };
  } catch (error) {
    errorHandler(ctx, error);
  }
};
