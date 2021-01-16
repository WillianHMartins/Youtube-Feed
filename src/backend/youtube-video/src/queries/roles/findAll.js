'use strict';

const { models } = require('../../dbLoader');

module.exports = async (where = {}) =>
  models.role.findAll({
    attributes: ['id', 'name', 'description', 'is_active'],
    where,
  });
