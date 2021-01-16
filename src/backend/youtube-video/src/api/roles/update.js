'use strict';

const errorHandler = require('../errors');

const findAll = require('../../queries/roles/findAll');
const updateById = require('../../queries/roles/updateById');

module.exports = async ctx => {
  try {
    const { id } = ctx.params;
    const role = ctx.request.body;
    await updateById({ id, ...role });

    ctx.status = 200;
    ctx.body = {
      message: 'updated',
      roles: await findAll({ is_active: true }),
      status: ctx.status,
    };
  } catch (errors) {
    errorHandler(ctx, errors);
  }
};
