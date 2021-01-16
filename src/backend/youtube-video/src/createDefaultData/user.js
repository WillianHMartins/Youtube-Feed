'use strict';

const { models } = require('../dbLoader');

module.exports = async () =>
  models.sequelize.transaction(async transaction => {
    const [role] = await models.role.findOrCreate({
      where: {
        name: 'admin',
      },
      defaults: {
        description: 'Administrador',
        name: 'admin',
      },
      transaction,
    });

    await Promise.all([
      models.role.findOrCreate({
        where: {
          name: 'regular',
        },
        defaults: {
          description: 'Regular',
          name: 'regular',
        },
        transaction,
      }),
      models.user.findOrCreate({
        where: {
          role_id: role.id,
        },
        defaults: {
          name: 'Administrador',
          password: 'admin',
          role_id: role.id,
          username: 'ADMIN',
          last_password_update: new Date(),
        },
        transaction,
      }),
    ]);
  });
