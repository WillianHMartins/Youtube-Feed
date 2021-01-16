'use strict';

const createDefaultUsers = require('./user');

module.exports = async () => Promise.all([createDefaultUsers()]);
