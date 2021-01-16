'use strict';

const errorHandler = require('../errors');

const findAll = require('../../queries/users/findAll');
const updateById = require('../../queries/users/updateById');

module.exports = async ctx => {
  try {
    const { id } = ctx.params;
    const user = ctx.request.body;

    await updateById({ id, ...user });

    ctx.status = 200;
    ctx.body = {
      message: 'updated',
      status: ctx.status,
      users: await findAll(),
    };
  } catch (errors) {
    errorHandler(ctx, errors);
  }
};
