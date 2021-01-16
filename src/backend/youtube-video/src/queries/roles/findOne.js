'use strict';

const { models } = require('../../dbLoader');

module.exports = async (where = {}) =>
  models.role.findOne({
    attributes: ['id', 'name', 'description', 'is_active'],
    where,
  });
