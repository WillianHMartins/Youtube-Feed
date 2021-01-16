'use strict';

const errorHandler = require('../errors');
const findAll = require('../../queries/users/findAll');

module.exports = async ctx => {
  try {
    ctx.status = 200; // OK
    ctx.body = {
      status: ctx.status,
      users: await findAll(),
    };
  } catch (error) {
    errorHandler(ctx, error);
  }
};
