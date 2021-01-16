'use strict';

const findAll = require('./findAll');

const data = require('./users.test.data');
const { create, drop } = require('../../dbLoader');

describe('Users find all', () => {
  beforeAll(() => create(data), 100000);
  afterAll(() => drop(), 100000);

  it('should find all users filtered by a id', async () => {
    const where = {
      id: 1,
    };
    const users = await findAll(where);
    expect(users).toMatchObject([
      {
        id: 1,
        name: 'USER 1',
        username: 'USER1',
        last_password_update: expect.any(String),
        role: {
          id: 1,
          name: 'ROLE1',
          is_active: true,
        },
      },
    ]);
  });

  it('should find all users filtered by role', async () => {
    const where = {
      role_id: 2,
    };
    const users = await findAll(where);
    expect(users.length).toBe(2);
  });

  it('should find all users', async () => {
    const users = await findAll();
    expect(users.length).toBe(5);
  });
});
