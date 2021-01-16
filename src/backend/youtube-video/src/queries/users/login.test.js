'use strict';

const login = require('./login');

const data = require('./users.test.data');
const { create, drop } = require('../../dbLoader');

jest.mock('../../auth/token', () => {
  return {
    create: jest.fn().mockImplementation(() => Promise.resolve('token')),
  };
});

describe('Users create', () => {
  beforeAll(() => create(data), 100000);
  afterAll(() => drop(), 100000);

  it('must return password Error', async () => {
    const user = {
      username: 'USER1',
      password: 'INVALIDPASS',
    };

    expect(login(user)).rejects.toThrow(
      'Could not authenticate: Invalid username or password'
    );
  });

  it('must return username Error', async () => {
    const user = {
      username: 'INVALIDUSERNAME',
      password: 'Password1',
    };

    expect(login(user)).rejects.toThrow(
      'Could not authenticate: Invalid username or password'
    );
  });

  it('must return last password update Error', async () => {
    const user = {
      username: 'USER2',
      password: 'Password2',
    };

    expect(login(user)).rejects.toThrow(
      'The authentication token could not be created: you must update' +
        ' the password to log in'
    );
  });

  it('must return last password update Error', async () => {
    const user = {
      username: 'USER3',
      password: 'Password3',
    };

    expect(login(user)).rejects.toThrow(
      'The authentication token could not be created: user password is' +
        ' expired, you must update the password to log in'
    );
  });

  it('must return last password update Error', async () => {
    const user = {
      username: 'USER5',
      password: 'Password5',
    };

    expect(login(user)).rejects.toThrow(
      'The authentication token could not be created:' +
        ' The User Profile associated with your user has been disabled,' +
        ' contact your administrator'
    );
  });

  it('must return token authenticated', async () => {
    const user = {
      username: 'USER1',
      password: 'Password1',
    };

    const token = await login(user);
    expect(token).toBe('token');
  });
});
