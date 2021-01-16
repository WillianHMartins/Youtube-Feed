'use strict';

const createUser = require('./create');

const data = require('./users.test.data');
const { create, drop } = require('../../dbLoader');

jest.mock('./validatePassword', () => {
  return {
    validatePassword: jest.fn().mockImplementation(() => Promise.resolve(true)),
  };
});

describe('Users create', () => {
  beforeAll(() => create(data), 100000);
  afterAll(() => drop(), 100000);

  it('should create a user using role_id', async () => {
    const user = {
      name: 'New User',
      username: 'newuser',
      role_id: 1,
    };

    const password = 'mypass234234';

    const createdUser = await createUser({
      ...user,
      last_password_update: null,
      password,
    });

    expect(createdUser).toMatchObject(user);
  });

  it('should create a user using role object', async () => {
    const user = {
      name: 'New User 2',
      username: 'newuser2',
    };
    const password = 'mypass';
    const role = {
      id: 1,
    };

    const createdUser = await createUser({
      ...user,
      password,
      last_password_update: null,
      role,
    });

    expect(createdUser).toMatchObject({
      ...user,
      role_id: role.id,
    });
  });

  it('should create a user password hash', async () => {
    const user = {
      name: 'New User 3',
      username: 'newuser3',
      role_id: 3,
    };

    const password = 'mypassnothashed';

    const createdUser = await createUser({
      ...user,
      last_password_update: null,
      password,
    });

    expect(createdUser).toMatchObject(user);
    expect(createdUser.password).not.toBe(password);
    expect(createdUser.matchPassword(password)).toBe(true);
  });
});
