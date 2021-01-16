'use strict';

const findOne = require('./findOne');
const updateCredentials = require('./updateCredentials');

const data = require('./users.test.data');
const { create, drop } = require('../../dbLoader');

jest.mock('../../auth/token', () => {
  return {
    create: jest.fn().mockImplementation(() => Promise.resolve('token')),
  };
});

describe('Users update credentials', () => {
  beforeAll(() => create(data), 100000000);
  afterAll(() => drop(), 100000000);

  it('should update a user password', async () => {
    const { id } = await findOne({ username: 'USER2' });
    const item = {
      id,
      current_password: 'Password2',
      password: 'Update1',
    };

    const token = await updateCredentials(item);
    expect(token).toBe('token');
  });

  it('should not update a user password, current password is required', async () => {
    const item = {
      id: 1,
      password: 'UPDATEDPASSWORD3',
    };

    expect(updateCredentials(item)).rejects.toThrow(
      'Current password is required'
    );
  });

  it('should not update a user password, could not validate current password, password is equal to new password', async () => {
    const item = {
      id: 4,
      current_password: 'Password4',
      password: 'Password4',
    };

    expect(updateCredentials(item)).rejects.toThrow(
      'Current password is equal to new password'
    );
  });

  it('should not update a user password, could not validate current password', async () => {
    const item = {
      id: 1,
      current_password: 'MyPass',
      password: 'UPDATEDPASSWORD2',
    };

    expect(updateCredentials(item)).rejects.toThrow(
      'Could not validate current password'
    );
  });

  it('should not update a user password, could not validate current password, user does not exist', async () => {
    const item = {
      id: 7,
      current_password: 'MyPass',
      password: 'UPDATEDPASSWORD3',
    };

    expect(updateCredentials(item)).rejects.toThrow(
      'Could not validate current password, user does not exist'
    );
  });
});
