'use strict';

const findOne = require('./findOne');

const data = require('./role.test.data');
const { create, drop } = require('../../dbLoader');

describe('Role find one', () => {
  beforeAll(() => create(data), 100000);
  afterAll(() => drop(), 100000);

  it('should find a role filtered by id', async () => {
    const where = {
      id: 1,
    };
    const role = await findOne(where);
    expect(role).toMatchObject({
      id: 1,
      name: 'test',
      description: 'TESTE',
      is_active: true,
    });
  });

  it('should not find a role filtered by id and name', async () => {
    const where = {
      id: 999,
      name: 'ENGENEER',
    };
    const role = await findOne(where);
    expect(role).toBe(null);
  });
});
