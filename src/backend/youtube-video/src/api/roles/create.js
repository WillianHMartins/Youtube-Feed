'use strict';

const errorHandler = require('../errors');

const findAll = require('../../queries/roles/findAll');
const create = require('../../queries/roles/create');

module.exports = async ctx => {
  try {
    const role = ctx.request.body;
    await create(role);

    ctx.status = 201;
    ctx.body = {
      message: 'created',
      roles: await findAll({ is_active: true }),
      status: ctx.status,
    };
  } catch (errors) {
    errorHandler(ctx, errors);
  }
};
