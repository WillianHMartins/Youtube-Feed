'use strict';

const router = require('koa-router')();

const login = require('./login');
router.post('/', login);

module.exports = router;
