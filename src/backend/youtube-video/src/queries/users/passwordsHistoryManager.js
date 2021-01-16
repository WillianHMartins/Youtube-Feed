'use strict';

const config = require('config');

const { models } = require('../../dbLoader');
const { Op } = models.Sequelize;

const destroyPasswordsHistoryOutOfLimitByUserId = async user_id => {
  const passwords_history = await models.passwords_history.findAll({
    attributes: ['id'],
    where: { user_id },
    order: [['createdAt', 'DESC']],
    limit: config.user.password.limit,
  });

  // delete all passwords_history out of limit (24 by default on config)
  return models.passwords_history.destroy({
    where: {
      user_id,
      id: {
        [Op.notIn]: passwords_history.map(item => item.id),
      },
    },
  });
};

const createPasswordsHistoryByUserId = async user_id => {
  const { password } = await models.user.findOne({
    attributes: ['password'],
    where: {
      id: user_id,
    },
  });

  await models.passwords_history.findOrCreate({
    where: {
      password,
      user_id,
    },
    defaults: {
      password,
      user_id,
    },
  });

  return destroyPasswordsHistoryOutOfLimitByUserId(user_id);
};

const modules = {
  createPasswordsHistoryByUserId,
  destroyPasswordsHistoryOutOfLimitByUserId,
};

module.exports = modules;
