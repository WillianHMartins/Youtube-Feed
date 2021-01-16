'use strict';

const config = require('config').server.jwt;
const jwt = require('koa-jwt');

module.exports = jwt({
  secret: config.secret,
  audience: config.audience,
  issuer: config.issuer,
});
