'use strict';

const errorHandler = require('../errors');

const create = require('../../queries/users/create');
const findAll = require('../../queries/users/findAll');

module.exports = async ctx => {
  try {
    const user = ctx.request.body;
    await create(user);

    ctx.status = 201;
    ctx.body = {
      message: 'created',
      status: ctx.status,
      users: await findAll(),
    };
  } catch (errors) {
    errorHandler(ctx, errors);
  }
};
