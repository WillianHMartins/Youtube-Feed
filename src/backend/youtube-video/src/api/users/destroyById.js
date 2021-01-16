'use strict';

const errorHandler = require('../errors');
const destroyBy = require('../../queries/users/destroyBy');
const findAll = require('../../queries/users/findAll');

module.exports = async ctx => {
  try {
    const { id } = ctx.params;
    await destroyBy({ id });

    ctx.status = 200;
    ctx.body = {
      message: 'deleted',
      status: ctx.status,
      users: await findAll(),
    };
  } catch (error) {
    errorHandler(ctx, error);
  }
};
