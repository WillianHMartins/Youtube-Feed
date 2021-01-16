'use strict';

const {
  validatePassword,
  hasRegex,
  hasUsername,
  isInPasswordsHistory,
} = require('./validatePassword');

const data = require('./users.test.data');
const { create, drop } = require('../../dbLoader');

describe('Users validate password', () => {
  beforeAll(() => create(data), 1000000000);
  afterAll(() => drop(), 1000000000);

  it('must return that the password be different from the last 24 passwords)', async () => {
    const user = {
      password: 'senha@Senha0',
      id: 1,
    };

    const validate = await isInPasswordsHistory(user);

    expect(validate).toBe(false);
  });

  it('must return that the password has a username', async () => {
    const password = 'minhUSER1senha';
    const validate = await hasUsername(password);

    expect(validate).toBe(true);
  });

  it('must return that the password does not have a username', async () => {
    const password = 'minhUSeER1senha';
    const validate = await hasUsername(password);

    expect(validate).toBe(false);
  });

  it('must return that the password has a regex (7 characters long, uppercase letters, lowercase letters, numerals and non-alphanumeric)', async () => {
    const password = 'min;hUSaER1senha';
    const validate = await hasRegex(password);

    expect(validate).toBe(true);
  });

  it('must return that the password has a regex (7 characters long, uppercase letters, lowercase letters and numerals)', async () => {
    const password = 'min1hUSaERsenha';
    const validate = await hasRegex(password);

    expect(validate).toBe(true);
  });

  it('must return that the password has a regex (7 characters long, uppercase letters, lowercase letters and non-alphanumeric)', async () => {
    const password = 'min%hUSaERsenha';
    const validate = await hasRegex(password);

    expect(validate).toBe(true);
  });

  it('must return that the password does not have a regex (7 characters long, uppercase letters, numerals and non-alphanumeric)', async () => {
    const password = '%a1&a1:a1%a1';
    const validate = await hasRegex(password);

    expect(validate).toBe(true);
  });

  it('must return that the password does not have a regex (7 characters long, lowercase letters, numerals and non-alphanumeric)', async () => {
    const password = '%A1&A1:A1%A1';
    const validate = await hasRegex(password);

    expect(validate).toBe(true);
  });

  it('must return that the password does not have a regex (7 characters long)', async () => {
    const password = '%1Aa';
    const validate = await hasRegex(password);

    expect(validate).toBe(false);
  });

  it('must return that the password does not have a regex (uppercase and/or lowercase and/or numeric)', async () => {
    const password = ',;:*%&!';
    const validate = await hasRegex(password);

    expect(validate).toBe(false);
  });

  it('must return that the password does not have a regex (uppercase or numeric)', async () => {
    const password = '%a:a&a%a';
    const validate = await hasRegex(password);

    expect(validate).toBe(false);
  });

  it('must return that the password does not have a regex (uppercase or lowercase)', async () => {
    const password = '%1:2&1%2';
    const validate = await hasRegex(password);

    expect(validate).toBe(false);
  });

  it('must return that the password does not have a regex (lowercase or numeric)', async () => {
    const password = '%A:B&A%C';
    const validate = await hasRegex(password);

    expect(validate).toBe(false);
  });

  it('must return valid password (create case)', async () => {
    const password = '%Apass%C';
    const validate = await validatePassword({ id: 1, password });

    expect(validate).toBe(true);
  });
});
