'use strict';

const router = require('koa-router')();

const login = require('./login');
router.use('/login', login.routes(), login.allowedMethods());

const roles = require('./roles');
router.use('/roles', roles.routes(), roles.allowedMethods());

const users = require('./users');
router.use('/users', users.routes(), users.allowedMethods());

module.exports = router;
