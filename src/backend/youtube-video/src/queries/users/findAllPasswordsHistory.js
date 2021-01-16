'use strict';

const { models } = require('../../dbLoader');

module.exports = async (where = {}) =>
  models.passwords_history.findAll({
    attributes: ['id', 'password', 'user_id'],
    where,
  });
