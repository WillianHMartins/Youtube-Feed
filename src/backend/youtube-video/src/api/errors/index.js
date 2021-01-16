'use strict';

const debug = require('debug-logger')('youtube-video:backend:api');

module.exports = async (ctx, error) => {
  if (process.env.NODE_ENV !== 'test')
    debug.log('API error handler\n\n', JSON.stringify(error, null, 2));

  ctx.status = error.status || error.statusCode || 400;

  ctx.body = {
    ...error,
    status: ctx.status,
    name: error.name,
    code: error.code,
    message: error.message,
    messages: error.errors
      ? error.errors.map(({ message, type, path, value }) => ({
          message,
          type,
          path,
          value,
        }))
      : [],
  };
};
