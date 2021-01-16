'use strict';

const { format } = require('date-fns');

const updateUserById = require('./updateById');

const data = require('./users.test.data');
const { create, drop } = require('../../dbLoader');

describe('Users update', () => {
  beforeAll(() => create(data), 100000);
  afterAll(() => drop(), 100000);

  it('should update a user by id role_id', async () => {
    const user = {
      id: 2,
      name: 'UPDATEDNAMEA',
      username: 'UPDATEDUSERNAMEA',
      role_id: 3,
    };

    const [, [updated]] = await updateUserById(user);

    expect(updated.matchPassword('Password2')).toBe(true);
    expect(updated).toMatchObject({
      ...user,
      last_password_update: null,
    });
  });

  it('should update a user by id using object', async () => {
    const user = {
      id: 1,
      name: 'UPDATEDNAMEB',
      username: 'UPDATEDUSERNAMEB',
    };
    const role = {
      id: 2,
    };

    const [, [updated]] = await updateUserById({
      ...user,
      role,
    });

    expect(updated).toMatchObject({
      ...user,
      last_password_update: format(new Date(), 'yyyy-MM-dd'),
      role_id: role.id,
    });
  });

  it('should update a user password', async () => {
    const user = {
      id: 3,
      password: 'Update123',
    };

    const [, [updated]] = await updateUserById({
      ...user,
    });

    expect(updated.last_password_update).toBe(format(new Date(), 'yyyy-MM-dd'));
    expect(updated.matchPassword(user.password)).toBe(true);
    expect(updated.matchPassword('Password3')).toBe(false);
  });
});
