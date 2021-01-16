'use strict';

module.exports = (sequelize, DataTypes) => sequelize.define(
  'role',
  {
    name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      unique: true,
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  },
  {
    tableName: 'role',
  }
);
