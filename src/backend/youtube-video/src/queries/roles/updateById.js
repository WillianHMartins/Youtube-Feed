'use strict';

const { models } = require('../../dbLoader');

module.exports = async ({ id, ...fields }) =>
  models.role.update(fields, {
    where: {
      id,
    },
  });
