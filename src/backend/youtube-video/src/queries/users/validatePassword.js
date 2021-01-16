'use strict';

const { models } = require('../../dbLoader');

const findAllUsers = require('../users/findAll');

class PasswordHasUserError extends Error {
  constructor(message) {
    super(message);
    this.code = 400;
    this.name = 'PasswordHasUserError';
  }
}

class PasswordHasRegexError extends Error {
  constructor(message) {
    super(message);
    this.code = 400;
    this.name = 'PasswordHasRegexError';
  }
}

class PasswordHasAlreadyBeenUsedRecently extends Error {
  constructor(message) {
    super(message);
    this.code = 400;
    this.name = 'PasswordHasAlreadyBeenUsedRecently';
  }
}

/**
 *  Check that the password is 7 characters long, and that it has at least three of these types:
 *  Uppercase letters, Lowercase letters, Numerals, Non-alphanumeric characters ; : * % & !
 *
 *  @param {string} password
 **/
const hasRegex = password => {
  /**
   * 7 characters long: (?=.{7,})
   * Uppercase letters: (?=.*[A-Z])
   * Lowercase letters: (?=.*[a-z])
   * Uppercase and Lowercase letters: (?=.*[a-zA-Z])
   * Numerals: (?=.*\d)
   * Non-alphanumeric: (?=.*[,;:*%&!])
   * Or: |
   **/

  const MAIN_REGEX = /^(?=.{7,})((?=.*\d)(?=.*[a-z])(?=.*[A-Z])|(?=.*\d)(?=.*[a-zA-Z])(?=.*[,;:*%&!])|(?=.*[a-z])(?=.*[A-Z])(?=.*[,;:*%&!])).*$/g;

  const re = new RegExp(MAIN_REGEX);

  return re.test(password);
};

/**
 *  Check if the name of an existing user is inside the password.
 *
 *  @param {string} password
 **/
const hasUsername = async password => {
  const users = await findAllUsers();
  return users.some(({ username }) =>
    password.toLowerCase().includes(username.toLowerCase())
  );
};

/**
 *  Verifify if the new password is diferent from the last passwords.
 *
 *  @param {string} password
 *  @param {number} id
 **/

const isInPasswordsHistory = async ({ id, password }) => {
  // Search in passwords_history table the last 24 passwords
  const passwords_history = await models.passwords_history.findAll({
    attributes: ['password'],
    where: {
      user_id: id,
    },
    order: [['createdAt', 'DESC']],
  });

  return passwords_history.some(item => item.matchPassword(password));
};

const validatePassword = async ({ password, id }) => {
  if (!hasRegex(password)) {
    throw new PasswordHasRegexError(
      `Passwords must be at least 7 characters and the character string must contain 
       at least three of these four character types: Uppercase letters, Lowercase letters, 
       Numerals, Non-alphanumeric characters (, . ; : * % & !).`
    );
  }

  if (await hasUsername(password)) {
    throw new PasswordHasUserError(
      'Could not create user: Password can not contain the username of a user'
    );
  }

  if (id && (await isInPasswordsHistory({ password, id }))) {
    throw new PasswordHasAlreadyBeenUsedRecently(
      'Could not update user: Password must be different from the last 24 passwords'
    );
  }

  return true;
};

const validator = {
  hasRegex,
  hasUsername,
  isInPasswordsHistory,
  validatePassword,
};

module.exports = validator;
