'use strict';

const errorHandler = require('../errors');
const findOne = require('../../queries/users/findOne');

module.exports = async ctx => {
  try {
    const { id } = ctx.params;

    ctx.status = 200;
    ctx.body = {
      status: ctx.status,
      user: await findOne({ id }),
    };
  } catch (error) {
    errorHandler(ctx, error);
  }
};
