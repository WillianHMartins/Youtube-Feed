'use strict';

const disableBy = require('./disableBy');
const findOne = require('./findOne');

const data = require('./role.test.data');
const { create, drop } = require('../../dbLoader');

describe('Role disable', () => {
  beforeAll(() => create(data), 100000);
  afterAll(() => drop(), 100000);

  it('should disable a role type by id', async () => {
    const where = {
      id: 1,
    };
    await disableBy(where);

    const role = await findOne(where);
    expect(role).toMatchObject({
      id: 1,
      name: 'test',
      description: 'TESTE',
      is_active: false,
    });
  });

  it('should disable a role type by name', async () => {
    const where = {
      name: 'engineer',
    };
    await disableBy(where);

    const role = await findOne(where);
    expect(role).toMatchObject({
      id: 2,
      name: 'engineer',
      description: 'ENGENHEIRO',
      is_active: false,
    });
  });
});
