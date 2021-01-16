"use strict";

const { format } = require("date-fns");
const bcrypt = require("bcryptjs");

const matchPassword = require("../user.utils");

const hashCostFactor = 1;

class HashPasswordError extends Error {
  constructor(message) {
    super(message || "HashPasswordError");
    this.code = 400;
    this.name = "HashPasswordError";
  }
}

const hashPasswordOnCreate = async user => {
  if (user.changed("password")) {
    try {
      // set password using bcrypt hash
      user.password = await bcrypt.hash(user.password, hashCostFactor);
      user.last_password_update = user.last_password_update || null;
    } catch (error) {
      throw new HashPasswordError(error);
    }
  }
  return user;
};

const hashPasswordOnUpdate = async (user) => {
  if (user.changed("password")) {
    try {
      user.password = await bcrypt.hash(user.password, hashCostFactor);
      user.last_password_update = format(new Date(), "yyyy-MM-dd");
    } catch (error) {
      throw new HashPasswordError(error);
    }
  }
  return user;
};

module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    "user",
    {
      username: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true
      },
      name: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      password: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      last_password_update: {
        type: DataTypes.DATEONLY
      }
    },
    {
      tableName: "user"
    }
  );

  user.beforeCreate(async user => await hashPasswordOnCreate(user));

  user.beforeUpdate(async user => await hashPasswordOnUpdate(user));

  /**
   * Checks if the parameter matches stored password
   * @param password
   */
  user.prototype.matchPassword = matchPassword;

  user.associate = models => {
    models.user.belongsTo(models.role, {
      foreignKey: "role_id",
      constraints: false,
      allowNull: false
    });

    models.user.hasMany(models.passwords_history, {
      foreignKey: "user_id",
      constraints: false,
      allowNull: false,
      onDelete: "CASCADE"
    });
  };

  return user;
};
