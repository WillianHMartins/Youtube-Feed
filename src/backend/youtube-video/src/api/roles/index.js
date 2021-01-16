'use strict';

const router = require('koa-router')();

const create = require('./create');
router.post('/', create);

const disableById = require('./disableById');
router.patch('/disable/:id', disableById);

const findAll = require('./findAll');
router.get('/', findAll);

const update = require('./update');
router.patch('/:id', update);

module.exports = router;
