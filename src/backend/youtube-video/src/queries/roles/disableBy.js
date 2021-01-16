'use strict';

const { models } = require('../../dbLoader');

module.exports = async where =>
  models.role.update(
    { is_active: false },
    {
      where,
    }
  );
