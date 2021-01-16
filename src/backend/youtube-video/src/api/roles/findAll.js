'use strict';

const errorHandler = require('../errors');
const findAll = require('../../queries/roles/findAll');

module.exports = async ctx => {
  try {
    ctx.status = 200;
    ctx.body = {
      status: ctx.status,
      roles: await findAll({ is_active: true }),
    };
  } catch (error) {
    errorHandler(ctx, error);
  }
};
