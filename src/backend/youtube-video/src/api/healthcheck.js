'use strict';

const router = require('koa-router')();

router.get('/', ctx => (ctx.status = 200));

module.exports = router;
