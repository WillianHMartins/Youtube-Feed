'use strict';

const findOne = require('./findOne');

const data = require('./users.test.data');
const { create, drop } = require('../../dbLoader');

describe('Users find one', () => {
  beforeAll(() => create(data), 100000);
  afterAll(() => drop(), 100000);

  it('should find a user filtered by id', async () => {
    const where = {
      id: 1,
    };
    const user = await findOne(where);
    expect(user).toMatchObject({
      id: 1,
      name: 'USER 1',
      username: 'USER1',
      last_password_update: expect.any(String),
      role: {
        id: 1,
        name: 'ROLE1',
        is_active: true,
      },
    });
  });

  it('should find a user filtered by usename', async () => {
    const where = {
      username: 'USER4',
    };
    const user = await findOne(where);
    expect(user).toMatchObject({
      id: expect.any(Number),
      name: 'USER 4',
      username: 'USER4',
      role: {
        id: 2,
        name: 'ROLE2',
        is_active: true,
      },
    });
  });

  it('should not find a user filtered by id and usename', async () => {
    const where = {
      id: 999,
      username: 'ENGENEER',
    };
    const user = await findOne(where);
    expect(user).toBe(null);
  });
});
