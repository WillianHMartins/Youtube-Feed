'use strict';

const errorHandler = require('../errors');
const disableBy = require('../../queries/roles/disableBy');
const findAll = require('../../queries/roles/findAll');

module.exports = async ctx => {
  try {
    const { id } = ctx.params;
    await disableBy({ id });

    ctx.status = 200;
    ctx.body = {
      message: 'disabled',
      roles: await findAll({ is_active: true }),
      status: ctx.status,
    };
  } catch (error) {
    errorHandler(ctx, error);
  }
};
