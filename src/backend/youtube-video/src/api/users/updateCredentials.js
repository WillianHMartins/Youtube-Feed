'use strict';

const errorHandler = require('../errors');

const updateCredentials = require('../../queries/users/updateCredentials');

module.exports = async ctx => {
  try {
    const { id } = ctx.params;
    const user = ctx.request.body;

    ctx.status = 200;
    ctx.body = {
      message: 'updated',
      status: ctx.status,
      token: await updateCredentials({ id, ...user }),
    };
  } catch (errors) {
    errorHandler(ctx, errors);
  }
};
