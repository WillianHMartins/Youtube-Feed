'use strict';

const sequelizeDebug = require('debug-logger')('youtube-video:sequelize');

const modules = {
  db: {
    name: undefined,
    password: undefined,
    port: undefined,
    username: undefined,
    options: {
      dialect: undefined,
      host: undefined,
      logging: sequelizeDebug,
    },
    retry: {
      max: 10,
    },
  },
  server: {
    port: 3100,
    jwt: {
      app: 'video-feed',
      audience: 'video-feed',
      expiresIn: '12h',
      issuer: 'admin',
      secret: undefined,
    },
  },
  bluebird: {
    concurrency: 50,
  },
  user: {
    password: {
      limit: 24,
    },
  },
};

module.exports = modules;
