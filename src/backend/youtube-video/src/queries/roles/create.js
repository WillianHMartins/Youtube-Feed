'use strict';

const { models } = require('../../dbLoader');

module.exports = async role => models.role.create(role);
