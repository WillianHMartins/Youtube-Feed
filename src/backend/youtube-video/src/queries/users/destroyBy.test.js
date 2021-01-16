'use strict';

const destroyBy = require('./destroyBy');
const findOne = require('./findOne');

const data = require('./users.test.data');
const { create, drop } = require('../../dbLoader');

describe('Users destroy', () => {
  beforeAll(() => create(data), 100000);
  afterAll(() => drop(), 100000);

  it('should destroy a user by id', async () => {
    const where = {
      id: 1,
    };
    const deleted = await destroyBy(where);
    expect(deleted).toBe(1);

    const deletedUser = await findOne(where);
    expect(deletedUser).toBe(null);
  });

  it('should destroy a user by username', async () => {
    const where = {
      username: 'USER4',
    };
    const deleted = await destroyBy(where);
    expect(deleted).toBe(1);

    const deletedUser = await findOne(where);
    expect(deletedUser).toBe(null);
  });
});
