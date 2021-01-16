'use strict';

const { models } = require('../../dbLoader');

module.exports = async (where = {}) =>
  models.user.findAll({
    attributes: ['id', 'name', 'username', 'last_password_update'],
    include: [
      {
        attributes: ['id', 'name', 'is_active'],
        model: models.role,
      },
    ],
    where,
  });
