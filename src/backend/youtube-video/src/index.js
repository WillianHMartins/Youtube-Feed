'use strict';

const config = require('config').server;
const debug = require('debug-logger')('youtube-video:backend');
const Koa = require('koa');
// eslint-disable-next-line node/no-missing-require
const jwt = require('koa-jwt');
const router = require('koa-router')();
const http = require('http');

const errorHandler = require('./api/errors');
const { models } = require('./dbLoader');

const createDefaultData = require('./createDefaultData');

const api = require('./api');

debug.log('Starting, env is', process.env.NODE_ENV);
if (!process.env.NODE_ENV) {
  throw new Error('Your environment is not defined, stuff will break!');
}

const app = new Koa();
debug.log('Backend startup');

if (process.env.NODE_ENV === 'development') {
  app.use(require('koa-logger')());
}

app.use(require('koa-response-time')());
app.use(require('koa-bodyparser')());
app.use(require('koa-helmet')());

// Middleware below this line is only reached if JWT token is valid
// Custom 401 handling if you don't want to expose koa-jwt errors to users
app.use(function(ctx, next) {
  return next().catch(({ status, ...error }) => {
    if (401 === status) {
      const { originalError = {}, ...rest } = error;
      errorHandler(ctx, { status, ...originalError, ...rest });
    } else {
      throw error;
    }
  });
});

// unless the URL starts with '/api/login' and '/api/users/credentials'
app.use(
  jwt({
    secret: config.jwt.secret,
  }).unless({
    path: [/^\/api\/login/, /^\/api\/users\/credentials/],
  })
);

router.use('/api', api.routes(), api.allowedMethods());
app.use(router.routes()).use(router.allowedMethods());

app.use(ctx => {
  ctx.body = 'Everything is fine, cheers.\n';
});

const server = http.createServer(app.callback());

// commented to generate less data load by automatically restarting the backend when a file is modified
// const faker = require("./faker");

const start = models
  .connect()
  .then(async () => {
    if (process.env.NODE_ENV === 'development') {
      /*
      await faker();
      debug.log(
        "Para desabilitar o mock dos dados no banco de dados comente o faker no index do server",
        "\n\n  youtube-video\\src\\backend\\youtube-video\\src\\index.js",
        "\n  await faker()\n\n"
      );
      */
      await createDefaultData();
    }

    if (process.env.NODE_ENV === 'production') {
      await createDefaultData();
    }

    server.listen(config.port);
    debug.log('Server is listening on port', config.port);
    debug.log('Connected to database');
  })
  // eslint-disable-next-line no-console
  .catch(error => console.log('Failed to connect to database', error));

function shutdown(sig) {
  debug.warn('Backend shutdown', sig);
  server.close(err => process.exit(err ? 1 : 0));
}

process.once('SIGTERM', shutdown);
process.once('SIGINT', shutdown);

const modules = {
  start,
  server,
};

module.exports = modules;
