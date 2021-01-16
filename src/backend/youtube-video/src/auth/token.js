'use strict';

const config = require('config').server.jwt;
const jwt = require('jsonwebtoken');

async function create({ id, name, username, role }) {
  return jwt.sign(
    { id, name, username, role, app: config.app },
    config.secret,
    {
      audience: config.audience,
      expiresIn: config.expiresIn,
      issuer: config.issuer,
      subject: username,
    }
  );
}

async function validate(token) {
  return jwt.verify(token, config.secret, {
    audience: config.audience,
    issuer: config.issuer,
    maxAge: config.expiresIn,
  });
}

const modules = {
  create,
  validate,
};

module.exports = modules;
