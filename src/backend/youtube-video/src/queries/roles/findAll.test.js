'use strict';

const findAll = require('./findAll');

const data = require('./role.test.data');
const { create, drop } = require('../../dbLoader');

describe('Roles find all', () => {
  beforeAll(() => create(data), 100000);
  afterAll(() => drop(), 100000);

  it('should find all roles filtered by a id', async () => {
    const where = {
      id: 1,
    };
    const roles = await findAll(where);
    expect(roles).toMatchObject([
      {
        id: 1,
        name: 'test',
        description: 'TESTE',
        is_active: true,
      },
    ]);
  });

  it('should find all roles', async () => {
    const roles = await findAll({ is_active: true });
    expect(roles.length).toBe(3);
  });

  it('should find all roles', async () => {
    const roles = await findAll();
    expect(roles.length).toBe(4);
  });
});
