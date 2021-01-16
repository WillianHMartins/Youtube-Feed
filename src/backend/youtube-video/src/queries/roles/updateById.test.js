'use strict';

const findOne = require('./findOne');
const updateById = require('./updateById');

const data = require('./role.test.data');
const { create, drop } = require('../../dbLoader');

describe('Role update', () => {
  beforeAll(() => create(data), 100000);
  afterAll(() => drop(), 100000);

  it('should update a role by id', async () => {
    const item = {
      id: 1,
      name: 'UPDATED A',
    };
    await updateById(item);

    const role = await findOne({ id: item.id });
    expect(role).toMatchObject({
      ...item,
      description: 'TESTE',
      is_active: true,
    });
  });
});
