'use strict';

const modules = {
  db: {
    options: {
      dialect: 'sqlite',
    },
  },
  server: {
    jwt: {
      secret: 'TEST',
    },
  },
  user: {
    password: {
      limit: 1,
    },
  },
};

module.exports = modules;
