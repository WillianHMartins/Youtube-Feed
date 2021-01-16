'use strict';

const findOne = require('./findOne');
const updateUserById = require('./updateById');
const updateCredentials = require('./updateCredentials');
const findAllPasswordsHistory = require('./findAllPasswordsHistory');

const data = require('./users.test.data');
const { create, drop } = require('../../dbLoader');

jest.mock('../../auth/token', () => {
  return {
    create: jest.fn().mockImplementation(() => Promise.resolve('token')),
  };
});

describe('Users passwords history manager', () => {
  beforeAll(() => create(data), 100000);
  afterAll(() => drop(), 100000);

  it('must update user password by id', async () => {
    const { id } = await findOne({ username: 'USER1' });

    await updateUserById({
      password: 'Password12',
      id,
    });

    const [, [updated]] = await updateUserById({
      password: 'Password123',
      id,
    });
    expect(updated.matchPassword('Password123')).toBe(true);
  });

  it('must return isNotUniqueInpasswordsHistorysError', async () => {
    const { id } = await findOne({ username: 'USER1' });
    await updateUserById({
      password: 'Password123',
      id,
    });

    expect(
      updateUserById({
        password: 'Password123',
        id,
      })
    ).rejects.toThrow(
      'Could not update user: Password must be different from the last 24 passwords'
    );
  });

  it('must return token', async () => {
    const { id } = await findOne({ username: 'USER2' });
    await updateCredentials({
      current_password: 'Password2',
      password: 'Password23',
      id,
    });

    await updateCredentials({
      current_password: 'Password23',
      password: 'Password232',
      id,
    });

    const token = await updateCredentials({
      current_password: 'Password232',
      password: 'Password2',
      id,
    });

    expect(token).toBe('token');
  });

  it('must return isNotUniqueInpasswordsHistorysError', async () => {
    const { id } = await findOne({ username: 'USER2' });

    await updateCredentials({
      current_password: 'Password2',
      password: 'Password12',
      id,
    });

    expect(
      updateCredentials({
        current_password: 'Password12',
        password: 'Password2',
        id,
      })
    ).rejects.toThrow(
      'Could not update user: Password must be different from the last 24 passwords'
    );
  });

  it('must storage users passwords (same passwords for different users)', async () => {
    const user2 = await findOne({ username: 'USER2' });
    const user1 = await findOne({ username: 'USER1' });

    await updateUserById({
      password: 'Password1111',
      id: user2.id,
    });

    await updateUserById({
      password: 'Password1111',
      id: user1.id,
    });

    const passwords_histry = await findAllPasswordsHistory();
    expect(passwords_histry.length).toBe(2);
  });
});
