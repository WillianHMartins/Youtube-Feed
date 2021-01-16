'use strict';

const router = require('koa-router')();

const create = require('./create');
router.post('/', create);

const destroyById = require('./destroyById');
router.delete('/:id', destroyById);

const findAll = require('./findAll');
router.get('/', findAll);

const findById = require('./findById');
router.get('/:id', findById);

const findAllUsersAndRoles = require('./findAllUsersAndRoles');
router.get('AndRoles/', findAllUsersAndRoles);

const update = require('./update');
router.patch('/:id', update);

const updateCredentials = require('./updateCredentials');
router.patch('/credentials/:id', updateCredentials);

const videoFeed = require('./videoFeed');
router.post('/:id/videoFeed/', videoFeed);

module.exports = router;
